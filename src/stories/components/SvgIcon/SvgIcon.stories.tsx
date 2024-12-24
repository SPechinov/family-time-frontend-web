import { type Meta, type StoryObj } from '@storybook/react';
import { SvgIcon, SvgIcons } from '../../../shared/components/SvgIcon';

const meta = {
  title: 'Components/SvgIcon',
  component: SvgIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'select' },
      options: Object.values(SvgIcons),
      description: 'The icon to display',
    },
  },
} satisfies Meta<typeof SvgIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'i_24_eye',
  },
};
