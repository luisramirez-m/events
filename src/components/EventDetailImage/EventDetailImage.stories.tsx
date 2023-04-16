import { eventsMock } from '@mocks/eventMock';

import EventDetailImage from './EventDetailImage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventDetailImage> = {
  title: 'Components/EventDetailImage',
  component: EventDetailImage
};

export default meta;
type Story = StoryObj<typeof EventDetailImage>;

export const Primary: Story = {
  args: {
    image: eventsMock[0].image.url
  },
  render: (props) => <EventDetailImage image={props.image} />
};
