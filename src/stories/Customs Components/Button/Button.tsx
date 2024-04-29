import './button.css';
import arrowIconWhite from '../../assets/caret-down.png';
import arrowIconBlue from '../../assets/icon-blue.png';

export interface Buttons {
  label: string;
  state?: 'Default' | 'Hovered' | 'Pressed' | 'Disabled'; 
  typeButton?: 'Primary' | 'Positive' | 'Negative' | 'Secondary' | 'Tertiary'; 
}

export const Button = ({
  label,
  state = 'Default',
  typeButton = 'Primary', 
  ...props
}: Buttons) => {
  let iconToShow = arrowIconWhite;

  if (typeButton === 'Secondary') {
    
    iconToShow = arrowIconBlue;
  } else if (typeButton === 'Tertiary') {
    
    iconToShow = arrowIconBlue; 
  }

  return (
    <button
      type="button"
      className={`storybook-button--${state}--${typeButton}`}
      {...props}
    >
      {label}
      <img src={iconToShow} alt="Arrow" style={{ marginLeft: '10px' }}/>
    </button>
  );
};