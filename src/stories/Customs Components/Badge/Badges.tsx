import './badge.css';
import circleBlack from '../../assets/ellipse.png';
import circleBlue from '../../assets/ellipseblue.png';
import circleRed from '../../assets/ellipsered.png';
import circleGreen from '../../assets/ellipsegreen.png';
import circleYellow from '../../assets/ellipseyellow.png';


export interface Badges {
label: string,
color?: 'Black' | 'Blue' | 'Red' | 'Green' | 'Yellow';
background: boolean,
outlined: boolean,
icon: boolean,
leftIcon: boolean,
rightIcon: boolean,
}

export const Badge = ({
label = 'Label',
color = 'Black',
background,
outlined,
icon,
leftIcon,
rightIcon,
...props
}: Badges) => {

let iconCircle;

const colorClass = {
    Black: 'black',
    Blue: 'blue',
    Red: 'red',
    Green: 'green',
    Yellow: 'yellow',
}[color];

if (colorClass == 'black'){
  iconCircle = circleBlack;
}
if (colorClass == 'blue'){
  iconCircle = circleBlue;
}
if (colorClass == 'red'){
  iconCircle = circleRed;
}
if (colorClass == 'green'){
  iconCircle = circleGreen;
}

if (colorClass == 'yellow'){
  iconCircle = circleYellow;
}


return (
<p
    className={`storybook-badge ${colorClass} ${background ? 'background' : ''} ${outlined ? 'outlined' : ''}`}
    {...props}
  >
    {icon && leftIcon && <img src={iconCircle} className="icon-left"/>}
    {label}
    {icon && rightIcon && <img  src={iconCircle} className="icon-right"/>}
  </p>
);
};