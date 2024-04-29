import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './SplitButton';

const meta = {
    title: 'Components/Split Button',
    component: Button,
    parameters: {
      
      layout: 'centered',
    },
    
    tags: ['autodocs'],
  
  } satisfies Meta<typeof Button>;

  export default meta;
type Story = StoryObj<typeof meta>;

export const SplitButton: Story = {
  args: {
    label: 'Label',
    state: 'Default',
  },

};