import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';

const meta = {
  title: 'Components/Empty State',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['Ilustration1', 'Ilustration2', 'Ilustration3', 'Ilustration4', 'Ilustration5'],
    },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyStates: Story = {
  args: {
    text: 'Desculpe, não foram encontrados resultados para essa busca',
    description: 'Verifique os termos digitados e tente novamente',
    type: 'Ilustration1',
    buttonLabel: 'Voltar para a página anterior',
    buttonHover: false,
  },
};
