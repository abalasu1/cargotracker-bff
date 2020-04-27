import {GET, Path} from 'typescript-rest';

@Path('cargo-items')
export class CargoItemsController {

  @GET
  async listCargoItems(): Promise<any[]> {
    return [];
  }
}