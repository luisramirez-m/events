import { eventsMock } from '@mocks/eventMock';
import { fireEvent, render, screen } from '@testing-library/react';

import EventCardImage from './EventCardImage';

describe('EventCardImage', () => {
  test('Should load image', () => {
    const event = eventsMock[0];
    render(<EventCardImage image={event.image.url} title={event.title} />);

    const image = screen.getByTestId('event-image');
    expect(image).toBeInTheDocument();
  });

  test('Should load error no image', () => {
    const eventNoImage = eventsMock[4];
    render(<EventCardImage image={eventNoImage.image.url} title={eventNoImage.title} />);

    const image = screen.getByTestId('event-image');
    fireEvent.error(image);

    const icon = screen.getByTestId('icon-calendar-today');
    expect(icon).toBeInTheDocument();
  });
});
