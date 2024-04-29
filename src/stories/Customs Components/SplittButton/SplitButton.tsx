import './splitButton.css';
import arrowImage from '../../assets/caret-down.png'

export interface SplitButton {
  label: string;
  state?: 'Default' | 'Hovered' | 'Pressed';

  
}

export const Button = ({
  label = 'Label',
  state = 'Default',
   
  ...props
}: SplitButton) => {
  return (
    
    <div className="splitButton-container">
      <button
        type="button"
        className={`storybook-splitButton-action--${state}`}
        {...props}
      >
        {label}
      </button>
      <button className={`storybook-splitButton-menu--${state}`}>
        <img src={arrowImage} alt="Arrow" />
      </button>
    </div>
    
  );
  
};