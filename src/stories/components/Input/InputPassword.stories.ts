import type { Meta, StoryObj } from '@storybook/react';
import { InputPassword } from '../../../shared';

const meta = {
  title: 'Components/InputPassword',
  component: InputPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    placeholder: 'Preview input',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Preview input',
    error: 'Error message text',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Preview input',
    value: 'Value',
    disabled: true,
  },
};

export const DisabledWithValue: Story = {
  args: {
    placeholder: 'Preview input',
    value: 'Value',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    placeholder: 'Preview input',
    value: 'Value',
    readOnly: true,
  },
};

export const ReadOnlyWithValue: Story = {
  args: {
    placeholder: 'Preview input',
    value: 'Value',
    readOnly: true,
  },
};
