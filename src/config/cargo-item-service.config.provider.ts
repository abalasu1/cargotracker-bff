import {ObjectFactory} from 'typescript-ioc';

const baseUrl: string = process.env.CARGOTRACKER-BOOKING-URL || 'localhost:8001';

export const cargoItemConfigFactory: ObjectFactory = () => ({
  baseUrl,
});