import { type Meta, type StoryObj } from '@storybook/react';
import { Country, SelectCountry } from '../../../shared';

const meta = {
  title: 'Components/SelectCountry',
  component: SelectCountry,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    country: {
      control: { type: 'select' },
      options: Object.values(Country),
    },
  },
} satisfies Meta<typeof SelectCountry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    placeholder: 'Откуда Вы?',
    country: undefined,
    onSelectCountry: () => {},
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Откуда Вы?',
    country: Country.LKA,
    onSelectCountry: () => {},
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Откуда Вы?',
    error: 'Ошибка',
    country: undefined,
    onSelectCountry: () => {},
  },
};
