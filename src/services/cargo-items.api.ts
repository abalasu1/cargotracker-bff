import {CargoItemModel} from '../models';

export abstract class CargoItemsApi {
  async abstract listCargoItems(): Promise<CargoItemModel[]>;
}