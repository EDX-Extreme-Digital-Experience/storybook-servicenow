
import { useState, useEffect } from 'react';
import './accordion.css';
import expandIcon from '../../assets/icon-mais.png';
import collapseIcon from '../../assets/icon-menos.png';

export interface Accordion {
  label: string;
  description: string;
  expanded: boolean;
}

export const AccordionStories = ({ label, description, expanded }: Accordion) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  useEffect(() => {
    setIsExpanded(expanded);
  }, [expanded]);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`storybook-accordion ${isExpanded ? 'expanded' : ''}`}>
  <div className="accordion-header">
    <p className="accordion-label">{label}</p>
    <img src={isExpanded ? collapseIcon : expandIcon} alt={isExpanded ? 'collapse' : 'expand'} className="accordion-icon" onClick={toggleAccordion} />
  </div>
  {isExpanded && <div className="divider"></div>}
  <div className="accordion-content" style={{ display: isExpanded ? 'block' : 'none' }}>
    <div className="description">
      {description}
    </div>
  </div>
</div>
  );
};
