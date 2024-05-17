import './Heading.css';
export interface IHeading {
    Text?: string;
    Size?: 'Base' | 'Large';
    DisableButton?: boolean;
}

export const Heading = ({
    Text = 'Meus Chamados',
    Size = 'Base',
    DisableButton = false,
}: IHeading) => {
    return (
       <div className="heading">
        <h2 className={Size}>{Text}</h2>
        { DisableButton && <button>Ver mais</button>}
       </div>
    );
};