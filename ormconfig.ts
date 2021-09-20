import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config = (): {
  "database": MysqlConnectionOptions,
  "redis_local": {
    port: number,
    host: string,
  },
  "redis": {
    port: number,
    user: string,
    password: string,
    url: string,
  }
} => ({
  "database": {
    "type": "mysql",
    "host": process.env.DB_HOST || "localhost",
    "port": parseInt(process.env.DB_PORT) || 3306,
    "username": process.env.DB_USERNAME ||"root",
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME || "sys",
    "synchronize": true, // change to false for production so it doesn't drop tables if schema is removed
    "logging": false,
    "entities": ["dist/src/**/*.entity.js"],
    "migrations": [
      "dist/db/migrations/*.ts",
    ],
    "cli": {
      "migrationsDir": "src/db.migrations",
    }
  },
  "redis_local": {
    host: process.env.REDIS_HOST || "localhost",
    port: parseInt(process.env.REDIS_PORT) || 6379,
  },
  "redis": {
    port: parseInt(process.env.REDIS_PORT),
    user: process.env.REDIS_USERNAME,
    password: process.env.REDIS_ROLE_PASSWORD,
    url: process.env.REDIS_URL,
  }
});



export default config;

//https://www.youtube.com/watch?v=sNosL578ECo
