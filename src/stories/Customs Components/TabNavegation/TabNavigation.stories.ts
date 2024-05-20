import { TabNavigation } from "./TabNavigation";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Tab Navigation',
    component: TabNavigation,
    parameters: {
      
      layout: 'centered',
    },
    
    tags: ['autodocs'],
  
  }satisfies Meta<typeof TabNavigation>;
  export default meta;
type Story = StoryObj<typeof meta>;

export const tabNavigation: Story = {
  args: {
        Status:'Default',
        Badge:true,
        Icon:true,
        Title:'Titulo',
        scale:'Default',

    
  },

};


  
