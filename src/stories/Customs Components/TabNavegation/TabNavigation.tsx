import './tabNavigation.css'
import Icone from "../../assets/Icone.png";
import Icone_ativo from "../../assets/Icone_ativo.png";

export interface ITabNavigation{

    Status: 'Default'|'Disabled'|'Hovered'|'Actived'|'Actived_Color',
    Icon: boolean,
    Title: String,
    Badge: boolean,
    scale:'Default'|'Compact'|'Expanded'
}



export const TabNavigation = ( { 
  Status='Default',Badge=true,Icon=true,scale='Default',Title='Tab 1',
 }: ITabNavigation) => {
    return (


      <div className={`content-${scale}`}>
        <button type='button' className={`tab-${Status}`}>
          <div className='icon'>{Status==='Actived_Color' ? Icon && <img src={Icone_ativo} alt="Icone" /> : <img src={Icone} alt='Icone_ativo'/>}</div>
          <div className='titulo'><h5>{Title}</h5></div></button>
          <div className='badge'>{Badge}</div>
      </div>
    );
  };
  
  export default TabNavigation;
