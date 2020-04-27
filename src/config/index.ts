import {CargoItemServiceConfig} from './cargo-item-service.config';
import {cargoItemConfigFactory} from './cargo-item-service.config.provider';
import {Container} from 'typescript-ioc';

export * from './cargo-item-service.config';

Container.bind(CargoItemServiceConfig).factory(cargoItemConfigFactory);