import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],

 
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Alerts: Story = {
  args: {
    state: 'Success',
    outlined: false,
    dismissible: false,
    title: 'Esta é uma mensagem de informação',
    description: true,
    descriptionText: 'Esta é a descrição da informação.',
    secondAction: true,
    actions: true,
  },
};


