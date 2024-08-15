import './tooltip.css';

export interface TooltipsProps {
    text: string;
    position: 'Top' | 'Right' | 'Bottom' | 'Left';
}

export const Tooltips: React.FC<TooltipsProps> = ({ text, position }) => {
    return (
        <div className="tooltip-container">
            <span className={`tooltip tooltip-${position.toLowerCase()}`} data-tooltip={text}></span>
        </div>
    );
};
