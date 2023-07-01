import { Meta, StoryObj } from '@storybook/react';
import Main from '.';

export default {
  component: Main,
} as Meta;

type Story = StoryObj<typeof Main>;

export const Basic: Story = {
  render: (args) => <Main {...args} />,
};
