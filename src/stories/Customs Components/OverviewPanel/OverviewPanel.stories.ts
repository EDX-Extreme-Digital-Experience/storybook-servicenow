import {Overview_Panel} from "./OverviewPanel";
import type {Meta, StoryObj} from '@storybook/react';

const meta = {
    title: 'Components/Overview Panel',
    component: Overview_Panel,
    parameters:{
        layout: 'centered',
    },
    tags:['autodocs'],

} satisfies Meta<typeof Overview_Panel>;
 export default meta;
 type Story=StoryObj<typeof meta>;


 export const overviewPanel: Story={
    args: {
        Position:'Begin',
        State:'Aberto',
        Selected:true,
        Label:'Tarefas',
        Number:'1',

    },
 };