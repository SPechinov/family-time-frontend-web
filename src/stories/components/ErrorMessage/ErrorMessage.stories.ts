import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from '../../../shared';

const meta = {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    message: 'Error message text',
  },
};
