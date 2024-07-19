import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';

const meta = {
  title: 'Components/Empty State',
  component: EmptyState,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],

} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyStates: Story = {
  args: {
    buttonLabel: 'Voltar para a página anterior',
    buttonHover: false,
  },
};
