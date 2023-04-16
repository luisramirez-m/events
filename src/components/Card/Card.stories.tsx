import Card from './Card';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {},
  render: () => <Card>This is a card</Card>
};
