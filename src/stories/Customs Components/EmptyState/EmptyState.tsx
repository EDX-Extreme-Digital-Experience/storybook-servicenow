import './emptyState.css';
import { Button } from '../Button/Button';
import Ilustration from '../../assets/Ilustration.png';

export interface EmptyStates {
  buttonLabel: string;
  buttonHover: boolean,
}

export const EmptyState: React.FC<EmptyStates> = ({ buttonLabel, buttonHover }) => {
return (
  <div className='contents'>
      <div className="content-img">
        <img src={Ilustration} alt="Ilustração" />
      </div>
      <div className='content-text'>
        <h2>Desculpe, não foram encontrados resultados para essa busca</h2>
        <p>Verifique os termos digitados e tente novamente</p>
      </div>
      <div className='content-button'>
        <Button label={buttonHover ? buttonLabel : buttonLabel} typeButton="Primary" leftIcon={false} rightIcon={false} style={{ backgroundColor: buttonHover ? 'var(--button-primary-hover, #182CB1)' : ''}}/>    
      </div>  
  </div>
);
};


