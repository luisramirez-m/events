import { bookingsMock } from '@mocks/bookingMock';

import EventDetailParticipantList from './EventDetailParticipantList';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventDetailParticipantList> = {
  title: 'Elements/EventDetailParticipantList',
  component: EventDetailParticipantList
};

export default meta;
type Story = StoryObj<typeof EventDetailParticipantList>;

export const Primary: Story = {
  args: {
    bookings: bookingsMock
  },
  render: (props) => <EventDetailParticipantList bookings={props.bookings} />
};
