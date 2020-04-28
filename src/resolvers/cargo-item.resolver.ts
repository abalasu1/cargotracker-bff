import {Query, Resolver} from 'type-graphql';
import {Inject} from 'typescript-ioc';

import {resolverManager} from './_resolver-manager';
import {CargoItem} from '../schemas';
import {CargoItemModel} from '../models';
import {CargoItemsService} from '../services';

@Resolver(of => CargoItem)
export class CargoItemResolver {
  @Inject
  service: CargoItemsService;

  @Query(returns => [CargoItem])
  async cargoItems(): Promise<CargoItemModel[]> {
    return this.service.listCargoItems();
  }
}

resolverManager.registerResolver(CargoItemResolver);