import { bookingsMock } from '@mocks/bookingMock';
import { render, screen } from '@testing-library/react';

import Avatar from './Avatar';

const userWithAvatar = bookingsMock[0].user;
const userWithOutAvatar = bookingsMock[1].user;

describe('Avatar', () => {
  test('Should generate avatar (image)', () => {
    render(<Avatar user={userWithAvatar} />);

    const avatar = screen.getByTestId('participant-avatar');
    expect(avatar).toBeInTheDocument();
  });

  test('Should generate avatar (initials)', () => {
    const { firstName, lastName } = userWithOutAvatar;

    render(<Avatar user={userWithOutAvatar} />);

    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
    const avatar = screen.getByText(initials);
    expect(avatar).toBeInTheDocument();
  });
});
