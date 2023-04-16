import EventDetailDate from './EventDetailDate';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventDetailDate> = {
  title: 'Components/EventDetailDate',
  component: EventDetailDate
};

export default meta;
type Story = StoryObj<typeof EventDetailDate>;

export const Primary: Story = {
  args: {
    date: '2023-01-01'
  },
  argTypes: { date: { control: 'date' } },
  render: (props) => (
    <div className="w-fit">
      <EventDetailDate date={props.date} />
    </div>
  )
};
