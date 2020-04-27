import {Field, Float, Int, ObjectType} from 'type-graphql';
import {CargoItemModel} from '../models';

@ObjectType()
export class CargoItem implements CargoItemModel {
  @Field()
  bookingId: string;
  @Field(type => Float)
  bookingAmount: number;
}