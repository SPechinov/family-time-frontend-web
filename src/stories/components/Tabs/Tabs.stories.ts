import type { Meta, StoryObj } from '@storybook/react';

import { Component } from './Component.tsx';

const meta = {
  title: 'Components/Tabs',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
