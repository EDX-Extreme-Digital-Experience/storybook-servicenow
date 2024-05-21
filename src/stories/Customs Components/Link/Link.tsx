import './link.css';

export interface LinksProps {
  label: string;
  state?: 'Default' | 'Hovered' | 'Visited' | 'Disabled'; 
}

export const Links = ({
  label,
  state = 'Default',
  ...props
}: LinksProps) => {
  return (
    <div {...props}>
      <a className={`link-text link-text--${state}`}>{label}</a>
    </div>
  );
};
