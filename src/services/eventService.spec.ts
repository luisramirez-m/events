import { eventsMock } from '@mocks/eventMock';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getEvent, getEvents } from './eventService';

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

  test('Should return one event', async () => {
    const eventId = 1;
    const url = `http://localhost:3000/events/${eventId}`;

    mockAdapter = new MockAdapter(axios);
    mockAdapter.onGet(url).reply(200, eventsMock[0]);

    const response = await getEvent(eventId);

    expect(mockAdapter.history.get[0].url).toEqual(url);
    expect(response).toEqual(eventsMock[0]);
  });
});
