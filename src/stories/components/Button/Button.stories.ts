import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonTheme } from '../../../shared';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: Object.values(ButtonTheme),
      description: 'The icon to display',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    theme: 'primary',
    children: 'Preview input',
    disabled: false,
  },
};
