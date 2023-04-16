import { eventsMock } from '@mocks/eventMock';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getEvents } from './eventService';

describe('EventService', () => {
  let mockAdapter;

  test('Should return all events', async () => {
    const url = 'http://localhost:3000/events';

    mockAdapter = new MockAdapter(axios);
    mockAdapter.onGet(url).reply(200, eventsMock);

    const response = await getEvents();

    expect(mockAdapter.history.get[0].url).toEqual(url);
    expect(response).toEqual(eventsMock);
  });
});
