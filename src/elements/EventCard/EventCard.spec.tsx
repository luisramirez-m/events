import { bookingsMock } from '@mocks/bookingMock';
import { eventsMock } from '@mocks/eventMock';
import { render, screen } from '@testing-library/react';

import EventCard from './EventCard';

import generateBeautifyDate from '@utils/generateBeautifyDate';
import generatePrice from '@utils/generatePrice';

const event = eventsMock[0];

beforeEach(() => {
  render(<EventCard bookings={bookingsMock} event={event} />);
});

describe('EventCard', () => {
  test('Should load image', () => {
    const image = screen.getByTestId('event-image');
    expect(image).toBeInTheDocument();
  });

  test('Should load title and dates', () => {
    const title = screen.getByText(event.title);
    const dates = screen.getByText(generateBeautifyDate(event.startAt, event.endAt));
    expect(title).toBeInTheDocument();
    expect(dates).toBeInTheDocument();
  });

  test('Should load participants', () => {
    const labelParticipants = screen.getByText('Participants');
    const participants = screen.getAllByTestId('participant-avatar');
    const participantsCount = screen.getByTestId('participant-count');

    expect(labelParticipants).toBeInTheDocument();
    expect(participants.length).toEqual(3);
    expect(Number(participantsCount.textContent)).toEqual(bookingsMock.length);
  });

  test('Should load remaining tickets', () => {
    const labelParticipants = screen.getByText('Places restantes');
    const remainingTickets = screen.getByTestId('event-remaining-tickets');

    expect(labelParticipants).toBeInTheDocument();
    expect(Number(remainingTickets.textContent)).toEqual(
      event.maxTickets === event.remainingTickets ? 'Complet' : event.remainingTickets
    );
  });

  test('Should load price', () => {
    const price = screen.getByTestId('event-price');

    expect(price.textContent).toEqual(generatePrice(event.price));
  });
});
