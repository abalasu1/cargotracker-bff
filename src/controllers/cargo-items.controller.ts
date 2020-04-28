import {Inject} from 'typescript-ioc';
import {GET, Path} from 'typescript-rest';
import {HttpError} from 'typescript-rest/dist/server/model/errors';

import {CargoItemModel} from '../models';
import {CargoItemsApi} from '../services';
import {LoggerApi} from '../logger';

class BadGateway extends HttpError {
  constructor(message?: string) {
    super("BadGateway", message);
    this.statusCode = 502;
  }
}

@Path('cargo-items')
export class CargoItemsController {
  @Inject
  service: CargoItemsApi;
  @Inject
  logger: LoggerApi;

  @GET
  async listCargoItems(): Promise<CargoItemModel[]> {
    this.logger.info('Request for cargo items');

    try {
      const cargoItems = await this.service.listCargoItems();

      this.logger.debug('Got cargo items: ', cargoItems);

      return cargoItems;
    } catch (err) {
      this.logger.error('Error getting cargoItems: ', err);

      throw new BadGateway('There was an error');
    }
  }
}