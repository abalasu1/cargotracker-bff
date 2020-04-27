import {Inject} from 'typescript-ioc';
import {GET, Path} from 'typescript-rest';
import {HttpError} from 'typescript-rest/dist/server/model/errors';

import {CargoItemModel} from '../models';
import {CargoItemsMockService} from '../services';

class BadGateway extends HttpError {
  constructor(message?: string) {
    super("BadGateway", message);
    this.statusCode = 502;
  }
}

@Path('cargo-items')
export class CargoItemsController {
  @Inject
  service: CargoItemsMockService;

  @GET
  async listCargoItems(): Promise<CargoItemModel[]> {
    try {
      return await this.service.listCargoItems();
    } catch (err) {
      throw new BadGateway('There was an error');
    }
  }
}