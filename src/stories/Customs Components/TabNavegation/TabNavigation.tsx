import './tabNavigation.css'

export interface ITabNavigation{

    Status: 'Default'|'Disabled'|'Hovered'|'Actived'|'Actived_Color',
    Icon: boolean,
    Title: String,
    Badge: boolean,
    scale:'Default'|'Compact'|'Expanded'
}


const Icone = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.5 1C1.22386 1 1 1.22386 1 1.5V5.5C1 5.77614 0.776142 6 0.5 6C0.223858 6 0 5.77614 0 5.5V1.5C0 0.671573 0.671573 0 1.5 0H5.5C5.77614 0 6 0.223858 6 0.5C6 0.776142 5.77614 1 5.5 1H1.5ZM10 0.5C10 0.223858 10.2239 0 10.5 0H14.5C15.3284 0 16 0.671573 16 1.5V5.5C16 5.77614 15.7761 6 15.5 6C15.2239 6 15 5.77614 15 5.5V1.5C15 1.22386 14.7761 1 14.5 1H10.5C10.2239 1 10 0.776142 10 0.5ZM0.5 10C0.776142 10 1 10.2239 1 10.5V14.5C1 14.7761 1.22386 15 1.5 15H5.5C5.77614 15 6 15.2239 6 15.5C6 15.7761 5.77614 16 5.5 16H1.5C0.671573 16 0 15.3284 0 14.5V10.5C0 10.2239 0.223858 10 0.5 10ZM15.5 10C15.7761 10 16 10.2239 16 10.5V14.5C16 15.3284 15.3284 16 14.5 16H10.5C10.2239 16 10 15.7761 10 15.5C10 15.2239 10.2239 15 10.5 15H14.5C14.7761 15 15 14.7761 15 14.5V10.5C15 10.2239 15.2239 10 15.5 10Z" fill="#203AEC"/>
  </svg>
);

const IconeAtivado=()=>(
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 1C1.22386 1 1 1.22386 1 1.5V5.5C1 5.77614 0.776142 6 0.5 6C0.223858 6 0 5.77614 0 5.5V1.5C0 0.671573 0.671573 0 1.5 0H5.5C5.77614 0 6 0.223858 6 0.5C6 0.776142 5.77614 1 5.5 1H1.5ZM10 0.5C10 0.223858 10.2239 0 10.5 0H14.5C15.3284 0 16 0.671573 16 1.5V5.5C16 5.77614 15.7761 6 15.5 6C15.2239 6 15 5.77614 15 5.5V1.5C15 1.22386 14.7761 1 14.5 1H10.5C10.2239 1 10 0.776142 10 0.5ZM0.5 10C0.776142 10 1 10.2239 1 10.5V14.5C1 14.7761 1.22386 15 1.5 15H5.5C5.77614 15 6 15.2239 6 15.5C6 15.7761 5.77614 16 5.5 16H1.5C0.671573 16 0 15.3284 0 14.5V10.5C0 10.2239 0.223858 10 0.5 10ZM15.5 10C15.7761 10 16 10.2239 16 10.5V14.5C16 15.3284 15.3284 16 14.5 16H10.5C10.2239 16 10 15.7761 10 15.5C10 15.2239 10.2239 15 10.5 15H14.5C14.7761 15 15 14.7761 15 14.5V10.5C15 10.2239 15.2239 10 15.5 10Z" fill="#262629"/>
</svg>
);




export const TabNavigation = ( { 
  Status='Default',Badge=true,Icon=true,scale='Default',Title='Tab 1',
 }: ITabNavigation) => {
    return (


      <div className={`content-${scale}`}>
        <button type='button' className={`tab-${Status}`}>
          <div className='icon'>{Status==='Actived_Color' ? Icon && <Icone/>:<IconeAtivado/> }</div>
          <div className='titulo'><h5>{Title}</h5></div></button>
          <div className='badge'>{Badge }</div>
      </div>
    );
  };
  
  export default TabNavigation;
