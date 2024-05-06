import type { Meta, StoryObj } from '@storybook/react';
import { AccordionStories } from './Accordion';

const meta = {
    title: 'Components/Accordion',
    component: AccordionStories,
    parameters: {
      
      layout: 'centered',
    },
    
    tags: ['autodocs'],
  
  } satisfies Meta<typeof AccordionStories>;

  export default meta;
type Story = StoryObj<typeof meta>;

export const Accordion: Story = {
  args: {
    label: 'Label',
    expanded: false,
    description: 'Lorem ipsum dolor sit amet consectetur. Lectus gravida integer sed nunc varius eros volutpat faucibus. Interdum commodo lacus bibendum mattis. Dignissim volutpat sed leo eros pellentesque volutpat. Sit tellus non non tempor sapien viverra neque.'

  },

};