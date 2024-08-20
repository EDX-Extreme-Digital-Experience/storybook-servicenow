import "./itemCard.css"
import Icone from "../../assets/Heart-Icon.svg";
import imagem from "../../assets/default-Image.svg"
import { Button } from '../Button/Button';
import { Badge } from '../Badge/Badges';

export interface IItemCard{

    Header:boolean,
    badgeLabel:String,
    badge:boolean,
    Icon:boolean,
    Image:boolean,
    Title:string,
    Description:string,
    buttonLabel:String,
    Shape:'Default'|'Rounded'|'Sharp',
    button:boolean,

}

export const Item_Card = ({

    Shape='Default',Header=true,Icon=true,Image=true,Title='Titulo do Item',
    Description='Descrição do item', buttonLabel='Next', badgeLabel='Label', button=true, badge=true,

}: IItemCard)=>{
    return(
        <div className={`shape-${Shape}`}>

        <div className="Header">{Header?(
        <>
            <div className='badge'>{badge?<Badge label={badgeLabel} color='Blue' background={true} outlined={false} icon={false} leftIcon={false} rightIcon={false}/>:null}</div>
            <div className="icon">{Icon ? <img src={Icone} alt='icone'/>: null}</div>
        </>):null }

         </div>
       
        <div className="Content">
            <div className='Image'>{Image? <img src={imagem} alt='imagem'/>:null}</div>
            <div className="texts">
            <div className='title'>{Title}</div>
            <div className="Description">{Description}</div>
            </div>
        </div>

        <div className="Button">{button? <Button label={buttonLabel} typeButton='Tertiary' leftIcon={false} rightIcon={false}/>:null}</div>

        </div>
    );
}
export default Item_Card