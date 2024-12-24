import { type Meta, type StoryObj } from '@storybook/react';
import { Flag, FlagIcon } from '../../../shared';

const meta = {
  title: 'Components/Flag',
  component: Flag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'select' },
      options: Object.values(FlagIcon),
      description: 'The icon to display',
    },
  },
} satisfies Meta<typeof Flag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'russia',
  },
};
