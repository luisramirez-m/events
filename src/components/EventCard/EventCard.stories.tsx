import { bookingsMock } from '@mocks/bookingMock';
import { eventsMock } from '@mocks/eventMock';

import EventCard from './EventCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventCard> = {
  title: 'Element/EventCard',
  component: EventCard
};

export default meta;
type Story = StoryObj<typeof EventCard>;

export const Primary: Story = {
  render: () => <EventCard bookings={bookingsMock} event={eventsMock[1]} />
};
