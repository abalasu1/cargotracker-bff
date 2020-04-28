import {Inject} from 'typescript-ioc';
import {get, Response} from 'superagent';

import {CargoItemsApi} from './cargo-items.api';
import {CargoItemModel} from '../models';
import {CargoItemServiceConfig} from '../config';
import {LoggerApi} from '../logger';

export class BackendCargoItem {
  'bookingId'?: string;
  'bookingAmount'?: number;
  'routeSpecification'?: string;
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
      const response: Response = await get(this.config.baseUrl + '/cargobooking/getallCargo')
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
    let bookingId = JSON.parse(JSON.stringify(item.bookingId));
    let bookingAmount = JSON.parse(JSON.stringify(item.bookingAmount));
    let routeSpecification = JSON.parse(JSON.stringify(item.routeSpecification));
    
    return {
      bookingId: bookingId.bookingId,
      bookingAmount: bookingAmount.bookingAmount,
      origin: routeSpecification.origin.unLocCode,
      destination: routeSpecification.destination.unLocCode,
      arrivaldeadline: routeSpecification.arrivalDeadline
    };
  }
}