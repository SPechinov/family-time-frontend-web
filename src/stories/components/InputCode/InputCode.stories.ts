import type { Meta, StoryObj } from '@storybook/react';
import { InputCode } from '../../../shared';

const meta = {
  title: 'Components/InputCode',
  component: InputCode,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    setValue: () => {},
    onSubmit: () => {},
  },
};
