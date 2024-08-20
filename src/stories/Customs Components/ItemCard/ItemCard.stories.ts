import { Item_Card } from "./ItemCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'Components/Item Card',
    component: Item_Card,
    parameters:{
        layout:'centered'
    },
    tags:['autodocs'],

} satisfies Meta<typeof Item_Card>;
 export default meta;
 type Story=StoryObj<typeof meta>;


 export const ItemCard: Story={
    args:{
        Header:true,
        badgeLabel:'Label',
        Icon:true,
        Image:true,
        Title:'Titulo do produto',
        Description:'Descrição do produto',
        buttonLabel:'Next',
        Shape:'Default'


    },
 };