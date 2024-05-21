import type { Meta, StoryObj } from '@storybook/react';
import { Attachments } from './Attachments';


const meta = {
  title: 'Components/Attachments',
  component: Attachments,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],

 
} satisfies Meta<typeof Attachments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Attachment: Story = {
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

  
  