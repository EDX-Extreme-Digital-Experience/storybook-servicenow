import React, { useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  let iconToShow = arrowIconWhite;
  if (typeButton === 'Secondary' || typeButton === 'Tertiary') {
    iconToShow = arrowIconBlue;
  }

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  const buttonState = state !== 'Default' ? state :
    isPressed ? 'Pressed' :
    isHovered ? 'Hovered' : 'Default';

  return (
    <button
      type="button"
      className={`storybook-button--${buttonState}--${typeButton}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      {...props}
    >
      {label}
      <img src={iconToShow} alt="Arrow" style={{ marginLeft: '10px' }} />
    </button>
  );
};
