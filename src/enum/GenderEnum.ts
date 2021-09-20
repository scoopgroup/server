import { registerEnumType } from '@nestjs/graphql';

export enum GenderEnum {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
}

registerEnumType(GenderEnum, {
  name: 'GenderEnum', // this one is mandatory
  description: 'gender selection', // this one is optional
});
