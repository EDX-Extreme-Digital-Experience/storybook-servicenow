import './attachments.css';
import iconDonwload from '../../assets/download.png';
import iconDismiss from '../../assets/x.png';

export interface Attachment {
    state?: 'Success' | 'Error' | 'Warning' | 'Info',
    outlined: boolean,
    dismissible: boolean,
    title: string,
    description: boolean,
    descriptionText: string,
    secondAction: boolean,
    actions: boolean,           
}

export const Attachments = () => {
    return(
    <div className="attachment">
        <div className='attachment-header'>
            <h3>IMG_0378.jpg  (1.3 MB)</h3>
        </div>
        <div className='teste'>
            <button className='button1'>
            <img src={iconDonwload} alt="Download"/>
            </button>
            <button className='button2'>
            <img src={iconDismiss} alt="Dismiss"/>
            </button>
        </div>
    </div>
    )
}
