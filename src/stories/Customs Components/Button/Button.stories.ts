import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Buttons',
  component: Button,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],

 
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Buttons: Story = {
  args: {
    label: 'Label',
    typeButton: 'Primary',
    state: 'Default',
  },
};


