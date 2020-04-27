import {Inject} from 'typescript-ioc';
import {get, Response} from 'superagent';

import {CargoItemsApi} from './cargo-items.api';
import {CargoItemModel} from '../models';
import {CargoItemServiceConfig} from '../config';
import {LoggerApi} from '../logger';

export class BackendCargoItem {
  'bookingId'?: string;
  'bookingAmount'?: number;
}

export class CargoItemsService implements CargoItemsApi {
  @Inject
  _logger: LoggerApi;
  @Inject
  config: CargoItemServiceConfig;

  get logger(): LoggerApi {
    return this._logger.child('CargoItemsService');
  }

  async listCargoItems(): Promise<CargoItemModel[]> {
    try {
      const response: Response = await get(this.config.baseUrl + '/cargo-items')
        .set('Accept', 'application/json');

      return this.mapCargoItems(response.body);
    } catch (err) {
      this.logger.error('Error getting data from service', err);
      throw err;
    }
  }

  mapCargoItems(data: BackendCargoItem[]): CargoItemModel[] {
    return data.map(this.mapCargoItem);
  }

  mapCargoItem(item: BackendCargoItem): CargoItemModel {
    return {
      bookingId: item.bookingId,
      bookingAmount: item.bookingAmount,
    };
  }
}