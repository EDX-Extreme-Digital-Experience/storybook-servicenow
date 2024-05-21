import type { Meta, StoryObj } from '@storybook/react';
import Search from './Search';

const meta = {
    title: 'Components/Search Bar',
    component: Search,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Search>;

type Story = StoryObj<typeof meta>;

export const DefaultSearch: Story = {
    args: {
        Placeholder: 'Placeholder',
        Scale: 'Default',
        State: 'Default',
        CloseIcon: false,
        SearchIcon: true,
        SearchPlaceHolder: '',
        Shape: 'Default',
    }
}

export default meta