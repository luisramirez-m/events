import Empty from './Empty';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Empty> = {
  title: 'Components/Empty',
  component: Empty
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Primary: Story = {
  args: {
    title: 'Pas d’événement',
    message: 'Il n’y a rien ici pour le moment',
    height: 500
  },
  render: (props) => <Empty height={props.height} message={props.message} title={props.title} />
};
