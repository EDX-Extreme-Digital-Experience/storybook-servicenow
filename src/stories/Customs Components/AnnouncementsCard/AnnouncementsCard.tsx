import './announcementsCard.css';
import imageAnnouncementsHorizontal from '../../assets/ImageHorizontal.png';
import imageAnnouncementsVertical from '../../assets/ImageVertical.png';
import imageCalendar from '../../assets/icon-calendar.png'
import iconLocalizacao from '../../assets/geo-alt.png';
import { Button } from '../Button/Button';
import { Links } from '../Link/Link';
import { Badge } from '../Badge/Badges';
import { format } from 'date-fns';


export interface AnnouncementsCard {
cardPosition?: 'Horizontal' | 'Vertical';
image: boolean;
titleText: string;
description: boolean;
descriptionText: string;
additionalInformation: boolean;
postDate: string | Date;
linkLabel: string;
buttonLabel: string;
badgeLabel: string;

}

export const AnnouncementsCardStories = ({
cardPosition,
image,
titleText = 'O Futuro da Tecnologia',
description,
descriptionText = 'Esteja pronto para uma jornada de descoberta, onde líderes da indústria compartilharão insights sobre inteligência artificial, segurança cibernética e muito mais.',
additionalInformation,
postDate = '2024-05-20T10:30',
linkLabel = 'Av. João Batista de Oliveira 47, São Paulo, SP, 03807-000',
buttonLabel = 'Adicionar na agenda',
badgeLabel = 'Evento',


}: AnnouncementsCard) => {

const imageSource = cardPosition === 'Horizontal' ? imageAnnouncementsHorizontal : imageAnnouncementsVertical;

const formatDate = (date: string | Date): string => {
const dateObj = typeof date === 'string' ? new Date(date) : date;
return format(dateObj, 'dd/MM/yyyy - HH:mm');
};


return (
<div className={`announcement-card ${cardPosition === 'Horizontal' ? 'horizontal' : 'vertical'}`}>
{image && <img src={imageSource} alt="Imagem do Anúncio" />}
<div className="content">
<div className="badge-container">{<Badge label={badgeLabel} color='Green' background={true} outlined={false} icon={false} leftIcon={false} rightIcon={false}/>}</div>
<p className="title-text">{titleText}</p>
{description && <p className="description-text">{descriptionText}</p>}
{additionalInformation && (
  <>
    <div className="icone-e-data">
      <img src={imageCalendar}/>
    <p className="date">{formatDate(postDate)}</p>
    </div>
    <div className="localizacao">
    <img src={iconLocalizacao}/>
    <div className="container-link">{<Links label={linkLabel}/>}</div>
    </div>
    <div className={`divider ${cardPosition === 'Horizontal' ? 'horizontal-divider' : 'vertical-divider'}`}></div>
    
  </>
  
)}
{additionalInformation}
<div className="adicionar-agenda">
  <p className="description-final">08 de fevereiro de 2024</p>
  {<Button label={buttonLabel} typeButton='Tertiary' leftIcon={false} rightIcon={false}/>}</div>
</div>
</div>
);
};
