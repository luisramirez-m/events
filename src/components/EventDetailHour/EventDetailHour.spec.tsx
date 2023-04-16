import { eventsMock } from '@mocks/eventMock';
import { render, screen } from '@testing-library/react';
import dayjs from 'dayjs';

import EventDetailHour from './EventDetailHour';

const event = eventsMock[0];

beforeEach(() => {
  render(<EventDetailHour endAt={event.endAt} startAt={event.startAt} />);
});

describe('EventDetailHour', () => {
  test('Should load start hour and end hour (formats)', () => {
    const startHour = dayjs(event.startAt).format('HH:MM');
    const endHour = dayjs(event.endAt).format('HH:MM');
    const hours = screen.getByText(`${startHour} - ${endHour}`);

    expect(hours).toBeInTheDocument();
  });
});
