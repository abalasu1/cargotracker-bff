import {ObjectFactory} from 'typescript-ioc';

const baseUrl: string = process.env.SERVICE_URL || 'localhost:8001';

export const cargoItemConfigFactory: ObjectFactory = () => ({
  baseUrl,
});