import { InputType, Field } from '@nestjs/graphql';
import { SwipeEnum } from '../../enum/SwipeEnum';
import { Swipe } from '../entities/swipe.entity';

@InputType()
export class UpdateSwipeInput implements Partial<Swipe> {
  @Field()
  id: number;

  @Field(() => String, { description: 'User Id of user swiping' })
  swiperId: number;

  @Field(() => String, {
    description: 'User Id of user being liked or disliked',
  })
  shownUserId: number;

  @Field(() => SwipeEnum)
  decision: SwipeEnum;
}
