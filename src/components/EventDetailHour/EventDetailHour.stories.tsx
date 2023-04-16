import { eventsMock } from '@mocks/eventMock';

import EventDetailHour from './EventDetailHour';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EventDetailHour> = {
  title: 'Components/EventDetailHour',
  component: EventDetailHour
};

export default meta;
type Story = StoryObj<typeof EventDetailHour>;

export const Primary: Story = {
  args: {
    startAt: eventsMock[0].startAt,
    endAt: eventsMock[0].endAt
  },
  argTypes: { startAt: { control: 'date' }, endAt: { control: 'date' } },
  render: (props) => (
    <div className="w-fit">
      <EventDetailHour endAt={props.endAt} startAt={props.startAt} />
    </div>
  )
};
