import { bookingsMock } from '@mocks/bookingMock';

import EventDetailParticipantListItem from './EventDetailParticipantListItem';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventDetailParticipantListItem> = {
  title: 'Components/EventDetailParticipantListItem',
  component: EventDetailParticipantListItem
};

export default meta;
type Story = StoryObj<typeof EventDetailParticipantListItem>;

export const Primary: Story = {
  args: {
    booking: bookingsMock[0]
  },
  render: (props) => <EventDetailParticipantListItem booking={props.booking} />
};
