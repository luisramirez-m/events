import { eventsMock } from '@mocks/eventMock';

import EventCardImage from './EventCardImage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventCardImage> = {
  title: 'Components/EventCardImage',
  component: EventCardImage
};

export default meta;
type Story = StoryObj<typeof EventCardImage>;

const event = eventsMock[1];
const eventWithoutImage = eventsMock[4];

export const Primary: Story = {
  render: () => <EventCardImage image={event.image.url} title={event.title} />
};

export const Error: Story = {
  render: () => <EventCardImage image={eventWithoutImage.image.url} title={eventWithoutImage.title} />
};
