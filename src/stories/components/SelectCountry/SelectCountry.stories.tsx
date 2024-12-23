import { type Meta, type StoryObj } from '@storybook/react';
import { SelectCountry } from '../../../shared';

const meta = {
  title: 'Components/SelectCountry',
  component: SelectCountry,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SelectCountry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    value: 'russia',
    placeholder: 'Откуда Вы?',
  },
};
