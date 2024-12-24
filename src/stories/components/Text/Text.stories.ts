import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextSize, TextTag } from '../../../shared';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    containerSize: {
      control: { type: 'select' },
      options: Object.values(TextSize),
      description: 'The icon to display',
    },
    tag: {
      control: { type: 'select' },
      options: Object.values(TextTag),
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    containerSize: 'm',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur dolorum iste quidem reiciendis. Ea libero officiis pariatur placeat totam!',
  },
};
