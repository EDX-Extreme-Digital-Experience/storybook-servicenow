import './Heading.css';
export interface IHeading {
    Text?: string;
    Size?: 'Base' | 'Large';
    link?: boolean;
}

export const Heading = ({
    Text = 'Meus Chamados',
    Size = 'Base',
    link = true,
}: IHeading) => {
    return (
       <div className="heading">
        <h2 className={Size}>{Text}</h2>
        { link && <a>Ver mais</a>}
       </div>
    );
};