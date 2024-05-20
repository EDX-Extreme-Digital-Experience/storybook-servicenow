
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';


const meta = {
    title: 'Components/Heading',
    component: Heading,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

type Story = StoryObj<typeof meta>;

export const Headings: Story = {
    args: {
        Text: 'Meus Chamados',
        Size: 'Base',
        link: true,
    }
    
}


export default meta