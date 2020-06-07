import {Application} from 'express';
import * as request from 'supertest';
import {Container} from 'typescript-ioc';

import {buildApiServer} from '../helper';
import Mock = jest.Mock;
import {CargoItemsMockService} from '../../src/services';

describe('cargo-item.controller', () => {

  let app: Application;
  let service_listCargoItems: Mock;

  beforeEach(async () => {
    service_listCargoItems = jest.fn();
    Container.bind(CargoItemsMockService).factory(
      () => ({
        listCargoItems: service_listCargoItems
      }),
    );

    const apiServer = buildApiServer();

    app = await apiServer.getApp();
  });

  test('canary verifies test infrastructure', () => {
     expect(true).toEqual(true);
  });

  describe('given GET /cargo-items', () => {
    describe('when service is successful', () => {
      const expectedResult = [
        { bookingId: 'ICBAEO1', bookingAmount: 100, origin: 'CNHKG', destination: "JFKC", arrivaldeadline: '2020-04-30' },
        { bookingId: 'ICBAEO2', bookingAmount: 200, origin: 'CNHKG', destination: "JFKC", arrivaldeadline: '2020-04-30' },
        { bookingId: 'ICBAEO3', bookingAmount: 300, origin: 'CNHKG', destination: "JFKC", arrivaldeadline: '2020-04-30' }
      ];
      beforeEach(() => {
        service_listCargoItems.mockResolvedValue(expectedResult);
      });

      test('then return 200 status', async () => {
        return request(app).get('/cargo-items').expect(200);
      });

      /*test('then should return value from service', async () => {
        return request(app).get('/cargo-items').expect(expectedResult);
      });*/
    });

    /*describe('when service fails', () => {
      beforeEach(() => {
        service_listCargoItems.mockRejectedValue(new Error('service failed'));
      });

      test('then return 502 error', async () => {
        return request(app).get('/cargo-items').expect(502);
      });
    });*/
  });
});