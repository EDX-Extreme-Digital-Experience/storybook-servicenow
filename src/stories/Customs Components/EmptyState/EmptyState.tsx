import './emptyState.css';
import { Button } from '../Button/Button';
import Ilustration1 from '../../assets/Ilustration1.png';
import Ilustration2 from '../../assets/Ilustration2.png';
import Ilustration3 from '../../assets/Ilustration3.png';
import Ilustration4 from '../../assets/Ilustration4.png';
import Ilustration5 from '../../assets/Ilustration5.png';


const illustrations = {
  Ilustration1,
  Ilustration2,
  Ilustration3,
  Ilustration4,
  Ilustration5
};

export interface EmptyStatesProps {
  text: string;
  description: string;
  type: 'Ilustration1' | 'Ilustration2' | 'Ilustration3' | 'Ilustration4' | 'Ilustration5';
  buttonLabel: string;
  buttonHover: boolean;
}

export const EmptyState: React.FC<EmptyStatesProps> = ({
  text,
  description,
  type,
  buttonLabel,
  buttonHover,
}) => {
  return (
    <div className='contents'>
      <div className="content-img">
        <img src={illustrations[type]} alt="Ilustração" />
      </div>
      <div className='content-text'>
        <h2>{text}</h2>
        <p>{description}</p>
      </div>
      <div className='content-button'>
        <Button
          label={buttonLabel}
          typeButton="Primary"
          leftIcon={false}
          rightIcon={false}
          style={{ backgroundColor: buttonHover ? 'var(--button-primary-hover, #182CB1)' : ''}}
        />
      </div>
    </div>
  );
};

