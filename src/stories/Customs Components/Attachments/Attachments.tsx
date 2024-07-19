import './attachments.css';
import iconDonwload from '../../assets/download.png';
import iconDismiss from '../../assets/x.png';

export interface Attachments {
    downloadHover: boolean;
    deleteHover: boolean;
}

export const Attachments: React.FC<Attachments> = ({ downloadHover, deleteHover }) => {
return (
<div className="attachment">
    <div className="attachment-header">
        <p>IMG_0378.jpg  (1.3 MB)</p>
        <div className="descricao">
            <p>25d atrás</p>
        </div>
    </div>
    <div className="content-tooltips">
        <div>
            <button className={`button1 ${downloadHover ? 'hover' : ''}`} data-tooltip1="Baixar">
                    <img src={iconDonwload} alt="Download"/>
            </button>
        </div>
        <div>
            <button className={`button2 ${deleteHover ? 'hover' : ''}`} data-tooltip2="Deletar">
                <img src={iconDismiss} alt="Dismiss"/>
            </button>
        </div>
    </div>
</div>
);
};


