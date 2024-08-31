import './attachments.css';
import { Tooltips } from '../Tooltip/Tooltip';
import iconDownload from '../../assets/download.png';
import iconDismiss from '../../assets/x.png';
import React from 'react';

export interface AttachmentsProps {
  downloadHover: boolean;
  deleteHover: boolean;
}

export const Attachments: React.FC<AttachmentsProps> = ({ downloadHover, deleteHover }) => {
  const [isDownloadHovering, setDownloadHover] = React.useState(downloadHover);
  const [isDeleteHovering, setDeleteHover] = React.useState(deleteHover);

  return (
    <div className="attachment">
      <div className="attachment-header">
        <p>IMG_0378.jpg (1.3 MB)</p>
        <div className="descricao">
          <p>25d atrás</p>
        </div>
      </div>
      <div className="content-tooltips">
        <div>
          <button 
            className={`button1 ${isDownloadHovering || downloadHover ? 'hover' : ''}`} 
            onMouseEnter={() => setDownloadHover(true)} 
            onMouseLeave={() => setDownloadHover(false)}
          >
            <img src={iconDownload} alt="Download" />
            <div className='tooltips'>
              {(isDownloadHovering || downloadHover) && <Tooltips position="Top" text="Baixar" />}
            </div>
          </button>
        </div>
        
        <div>
          <button 
            className={`button2 ${isDeleteHovering || deleteHover ? 'hover' : ''}`} 
            onMouseEnter={() => setDeleteHover(true)} 
            onMouseLeave={() => setDeleteHover(false)}
          >
            <img src={iconDismiss} alt="Dismiss" />
            <div className='tooltips'>
              {(isDeleteHovering || deleteHover) && <Tooltips position="Top" text="Deletar" />}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};


