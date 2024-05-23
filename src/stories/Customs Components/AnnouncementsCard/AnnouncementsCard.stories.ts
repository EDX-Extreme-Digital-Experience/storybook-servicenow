import type { Meta, StoryObj } from '@storybook/react';
import { AnnouncementsCardStories } from './AnnouncementsCard';

const meta = {
  title: 'Components/Announcements Card',
  component: AnnouncementsCardStories,
  parameters: {
    
    layout: 'centered',
  },
  
  tags: ['autodocs'],

} satisfies Meta<typeof AnnouncementsCardStories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnnouncementsCard: Story = {
  args: {
    cardPosition: 'Horizontal',
    image: true,
    titleText: 'O Futuro da Tecnologia',
    description: true,
    descriptionText: 'Esteja pronto para uma jornada de descoberta, onde líderes da indústria compartilharão insights sobre inteligência artificial, segurança cibernética e muito mais.',
    additionalInformation: true,
    postDate: '2024-05-20T10:30',
    linkLabel: 'Av. João Batista de Oliveira 47, São Paulo, SP, 03807-000',
    buttonLabel: 'Adicionar na agenda',
    badgeLabel: 'Evento',
    
  },
};


