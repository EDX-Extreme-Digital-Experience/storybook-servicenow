import { Meta, Story } from '@storybook/react';
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
type StoryType = Story<typeof meta>;

export const AttachmentsProps: StoryType = {
args: {
    hover: false,
},
};