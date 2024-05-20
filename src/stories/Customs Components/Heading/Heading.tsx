import './Heading.css';
import IHeading from './IHeading';


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