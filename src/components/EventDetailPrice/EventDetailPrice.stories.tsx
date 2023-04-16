import EventDetailPrice from './EventDetailPrice';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventDetailPrice> = {
  title: 'Components/EventDetailPrice',
  component: EventDetailPrice
};

export default meta;
type Story = StoryObj<typeof EventDetailPrice>;

export const Primary: Story = {
  args: {
    isReserved: false,
    price: '0.0'
  },
  render: (props) => <EventDetailPrice isReserved={props.isReserved} price={props.price} />
};
