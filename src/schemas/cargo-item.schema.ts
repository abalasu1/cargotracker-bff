import {Field, Float, Int, ObjectType} from 'type-graphql';
import {CargoItemModel} from '../models';

@ObjectType()
export class CargoItem implements CargoItemModel {
  @Field()
  bookingId: string;
  @Field(type => Float)
  bookingAmount: number;
  @Field()
  origin: string;
  @Field()
  destination: string;   
  @Field()
  arrivaldeadline: string;
  @Field()
  routingStatus: string;
  @Field()
  transportStatus: string;       
}