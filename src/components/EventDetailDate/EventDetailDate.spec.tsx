import { eventsMock } from '@mocks/eventMock';
import { render, screen } from '@testing-library/react';
import dayjs from 'dayjs';

import EventDetailDate from './EventDetailDate';

const event = eventsMock[0];

beforeEach(() => {
  render(<EventDetailDate date={event.startAt} />);
});

describe('EventDetailDate', () => {
  test('Should load date (formats)', () => {
    const month = dayjs(event.startAt).format('MMM');
    const monthOnDocument = screen.getByText(month);

    const day = dayjs(event.startAt).format('D');
    const dayOnDocument = screen.getByText(day);

    expect(monthOnDocument).toBeInTheDocument();
    expect(dayOnDocument).toBeInTheDocument();
  });
});
