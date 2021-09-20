import { registerEnumType } from '@nestjs/graphql';

export enum PhotoRatingCriteriaEnum {
  SMART = 'SMART',
  TRUSTWORTHY = 'TRUSTWORTHY',
  ATTRACTIVE = 'ATTRACTIVE',
}

registerEnumType(PhotoRatingCriteriaEnum, {
  name: 'PhotoRatingCriteriaEnum', // this one is mandatory
  description: 'What to rate', // this one is optional
});
