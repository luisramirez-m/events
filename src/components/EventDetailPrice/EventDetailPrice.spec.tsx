import { render, screen } from '@testing-library/react';

import EventDetailPrice from './EventDetailPrice';

describe('EventDetailPrice', () => {
  test('Should load Reserver text', () => {
    render(<EventDetailPrice isReserved price="0.0" />);

    const isReservedText = screen.getByText(/(1 place réservée)/i);
    expect(isReservedText).toBeInTheDocument();
  });

  test('Should load participant avatar', () => {
    render(<EventDetailPrice isReserved={false} price="0.0" />);

    const isReservedText = screen.getByText('Gratuit');
    expect(isReservedText).toBeInTheDocument();
  });
});
