import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '../../../shared';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    activeValue: {
      control: { type: 'inline-radio' },
      options: ['item-1', 'long-item-2', 'item-3', 'one-more-item-4'],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeValue: 'item-1',
    onClickTab: () => {},
  },
  render: (args) => (
    <Tabs {...args}>
      <Tabs.Tab value="item-1">Item 1</Tabs.Tab>
      <Tabs.Tab value="long-item-2">Long item 2</Tabs.Tab>
      <Tabs.Tab value="item-3">Item 3</Tabs.Tab>
      <Tabs.Tab value="one-more-item-4">One more long item 4</Tabs.Tab>
    </Tabs>
  ),
};
