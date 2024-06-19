import './attachments.css';
import iconDonwload from '../../assets/download.png';
import iconDismiss from '../../assets/x.png';

export interface Attachments {
hover: boolean;
}

export const Attachments: React.FC<Attachments> = ({ hover }) => {
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
        <button className={`button1 ${hover ? 'hover' : ''}`} data-tooltip="Baixar">
                <img src={iconDonwload} alt="Download"/>
        </button>
        </div>
        <div>
            <button className="button2" data-tooltip="Deletar">
                <img src={iconDismiss} alt="Dismiss"/>
            </button>
        </div>
    </div>
</div>
);
};


