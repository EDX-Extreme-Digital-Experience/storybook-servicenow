import type { Meta, StoryObj } from '@storybook/react';
import { Tooltips } from './Tooltip';

const meta = {
    title: 'Components/Tooltip',
    component: Tooltips,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        position: {
            control: 'radio',
            options: ['Top', 'Right', 'Bottom', 'Left'],
        },
    },
} satisfies Meta<typeof Tooltips>;

export default meta;
type StoryType = StoryObj<typeof meta>;

export const TooltipsProps: StoryType = {
    args: {
        text: 'text',
        position: 'Top',
    },
};
