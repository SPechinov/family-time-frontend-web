import type { Meta, StoryObj } from '@storybook/react';
import { InlineLink, InlineLinkSize } from '../../../shared';

const meta = {
  title: 'Components/InlineLink',
  component: InlineLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    containerSize: {
      control: { type: 'select' },
      options: Object.values(InlineLinkSize),
      description: 'Size',
    },
  },
} satisfies Meta<typeof InlineLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: 'Inline link',
    containerSize: 'm',
    href: '',
  },
};
