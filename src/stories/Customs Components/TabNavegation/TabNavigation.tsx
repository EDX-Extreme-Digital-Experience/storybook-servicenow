import './tabNavigation.css'


export interface ITabNavigation{

    Status: 'Default'|'Disabled'|'Hovered'|'Actived'|'Actived_Color',
    Icon: boolean,
    Title: String,
    Badge: boolean,
    scale:'Default'|'Compact'|'Expanded'
}


export const TabNavigation = ( { 
  Status='Default',Badge=true,Icon=true,scale='Default',Title='Titulo',
 }: ITabNavigation) => {
    let classe;
    switch (scale) {
      case 'Compact':
        classe = 'compact';
        break;
      case 'Expanded':
        classe = 'expanded';
        break;
      default:
        classe = 'Default';
    }
  
    return (
      <div>
        Olá, este é o meu componente React!
      </div>
    );
  };
  
  export default TabNavigation;
