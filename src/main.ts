import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';
import cors from 'cors';
import { createClient } from 'redis';
import * as connectRedis from 'connect-redis';
import config from '../ormconfig';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    const RedisStore = connectRedis(session);

    const redisClient = createClient(config().redis);

    redisClient.on('error', function (err) {
      console.log('Could not establish a connection with redis. ' + err);
    });

    redisClient.on('connect', function (err) {
      console.log('Connected to redis successfully');
    });

    // app.use(cors({
    //   credentials: true,
    //   origin: "http://localhost:3000"
    // }));

    app.useGlobalPipes(new ValidationPipe());

    //TODO: dont use in memory session

    app.use(
      session({
        store: new RedisStore({ client: redisClient }),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 }, // 1 year
      }),
    );

    app.use(function (req, res, next) {
      if (!req.session) {
        return next(new Error('no session')); // handle error
      }
      next(); // otherwise continue
    });

    app.use(passport.initialize());
    app.use(passport.session());

    return await app.listen(3000);
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
