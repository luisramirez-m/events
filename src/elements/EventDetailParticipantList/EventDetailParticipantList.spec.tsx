import { bookingsMock } from '@mocks/bookingMock';
import { render, screen } from '@testing-library/react';

import EventDetailParticipantList from './EventDetailParticipantList';

beforeEach(() => {
  render(<EventDetailParticipantList bookings={bookingsMock} />);
});

describe('EventDetailParticipantList', () => {
  test('Should load participant items', () => {
    const listItems = screen.getAllByTestId('participant-list-item');
    expect(listItems.length).toEqual(bookingsMock.length);
  });
});
