import { registerEnumType } from '@nestjs/graphql';

export enum SwipeEnum {
  LIKED = 'LIKED',
  DISLIKED = 'DISLIKED',
}

registerEnumType(SwipeEnum, {
  name: 'SwipeEnum', // this one is mandatory
  description: 'Liked or Disliked', // this one is optional
});
