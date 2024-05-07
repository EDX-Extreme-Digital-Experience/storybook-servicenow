import './alert.css';
import iconDismissible from '../../assets/dismissible.png';
import iconSuccess from '../../assets/check-circle.png';
import iconError from '../../assets/x-circle.png';
import iconWarning from '../../assets/exclamation-triangle.png';
import iconInfo from '../../assets/info-circle.png';

export interface Alerts {
    state?: 'Success' | 'Error' | 'Warning' | 'Info',
    outlined: boolean,
    dismissible: boolean,
    title: string,
    description: boolean,
    descriptionText: string,
    secondAction: boolean,
    actions: boolean, 
}

export const Alert = ({
    state = 'Success',
    outlined = false,
    dismissible = false,
    title = 'Esta é uma mensagem de informação',
    description = true,
    descriptionText = 'Esta é a descrição da informação.',
    secondAction = true,
    actions = true,
}: Alerts) => {

  let iconToShow;
  switch(state) {
    case 'Success':
      iconToShow = iconSuccess;
      break;
    case 'Error':
      iconToShow = iconError;
      break;
    case 'Warning':
      iconToShow = iconWarning;
      break;
    case 'Info':
      iconToShow = iconInfo;
      break;
    default:
      iconToShow = iconSuccess;
  }
 
  return (
    <div className={`alert ${state} ${outlined ? 'outlined' : ''}`}>
      <div className="alert-header">
        <div className="icon-container">
          <img src={iconToShow} alt="Icone" />
        </div>
        <h3>{title}</h3>
        {dismissible && (
          <button className="close-btn">
            <img src={iconDismissible} alt="Fechar" />
          </button>
        )}
      </div>
      {description && <p className="alert-description">{descriptionText}</p>}
      {actions && <button className="primary-action-btn">Action 1</button>}
      {actions && secondAction && <button className="second-action-btn">Action 2</button>}
    </div>
  );
};
