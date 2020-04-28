import {CargoItemsApi} from './cargo-items.api';
import {CargoItemModel} from '../models';

export class CargoItemsMockService implements CargoItemsApi {
  async listCargoItems(): Promise<CargoItemModel[]> {
    return [
      {
        bookingId: 'ICBAEO1',
        bookingAmount: 100,
        origin: 'CNHKG', 
        destination: 'JFKC', 
        arrivaldeadline: '2020-04-30'
      },
      {
        bookingId: 'ICBAEO2',
        bookingAmount: 200,
        origin: 'CNHKG', 
        destination: 'JFKC', 
        arrivaldeadline: '2020-04-30'
      },
      {
        bookingId: 'ICBAEO3',
        bookingAmount: 300,
        origin: 'CNHKG', 
        destination: 'JFKC', 
        arrivaldeadline: '2020-04-30'
      }
    ];
  }
}