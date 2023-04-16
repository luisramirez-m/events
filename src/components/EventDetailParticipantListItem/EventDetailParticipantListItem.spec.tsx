import { bookingsMock } from '@mocks/bookingMock';
import { render, screen } from '@testing-library/react';

import EventDetailParticipantListItem from './EventDetailParticipantListItem';

beforeEach(() => {
  render(<EventDetailParticipantListItem booking={bookingsMock[0]} />);
});

describe('EventDetailParticipantListItem', () => {
  test('Should load participant avatar', () => {
    const avatar = screen.getByTestId('participant-avatar');
    expect(avatar).toBeInTheDocument();
  });

  test('Should load participant complet name', () => {
    const { user } = bookingsMock[0];
    const completName = `${user.firstName} ${user.lastName}`;
    const completNameDocument = screen.getByText(completName);

    expect(completNameDocument).toBeInTheDocument();
  });
});
