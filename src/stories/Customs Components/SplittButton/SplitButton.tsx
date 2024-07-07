import './splitButton.css';
import arrowImage from '../../assets/caret-down.png';
import { useState, useEffect } from 'react';

export interface SplitButtonProps {
  label: string;
  state?: 'Default' | 'Hovered' | 'Pressed';
}

export const Button = ({ label = 'Label', state = 'Default' }: SplitButtonProps) => {
  const [buttonState, setButtonState] = useState(state);

  useEffect(() => {
    setButtonState(state);
  }, [state]);

  return (
    <div className="splitButton-container">
      <button
        type="button"
        className={`storybook-splitButton-action--${buttonState}`}
        onMouseEnter={() => setButtonState('Hovered')}
        onMouseLeave={() => setButtonState('Default')}
        onMouseDown={() => setButtonState('Pressed')}
        onMouseUp={() => setButtonState('Hovered')}
      >
        {label}
      </button>
      <button
        type="button"
        className={`storybook-splitButton-menu--${buttonState}`}
        onMouseEnter={() => setButtonState('Hovered')}
        onMouseLeave={() => setButtonState('Default')}
        onMouseDown={() => setButtonState('Pressed')}
        onMouseUp={() => setButtonState('Hovered')}
      >
        <img src={arrowImage} alt="Arrow" />
      </button>
    </div>
  );
};
