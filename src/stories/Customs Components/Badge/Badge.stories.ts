import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badges';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],

 
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Badges: Story = {
  args: {
    label: 'Label',
    color: 'Black',
    background: true,
    outlined: false,
    icon: true,
    leftIcon: false,
    rightIcon: false,

  },
};


