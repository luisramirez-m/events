import { bookingsMock } from '@mocks/bookingMock';

import Avatar from './Avatar';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    user: bookingsMock[0].user
  },
  render: (props) => (
    <div className="flex gap-4">
      <Avatar user={props.user} />
      <Avatar user={bookingsMock[1].user} />
    </div>
  )
};
