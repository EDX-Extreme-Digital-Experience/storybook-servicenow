import type { Meta, StoryObj } from '@storybook/react';
import { Links } from './Link';

const meta = {
  title: 'Components/Link',
  component: Links,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],

 
} satisfies Meta<typeof Links>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Link: Story = {
  args: {
    label: 'Link text',
    state: 'Default',
  },
};


