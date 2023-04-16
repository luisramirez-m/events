import { bookingsMock } from '@mocks/bookingMock';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getBookings } from './bookingService';

describe('EventService', () => {
  let mockAdapter;

  test('Should return all bookings', async () => {
    const url = 'http://localhost:3000/bookings';

    mockAdapter = new MockAdapter(axios);
    mockAdapter.onGet(url).reply(200, bookingsMock);

    const response = await getBookings();

    expect(mockAdapter.history.get[0].url).toEqual(url);
    expect(response).toEqual(bookingsMock);
  });
});
