import './overviewPanel.css'

export interface IOverviewPanel{

    Position: 'Begin'|'Middle'|'End',
    State: 'Todos'|'Aberto'|'Pendente'|'Em_Andamento'|'Concluido',
    Selected: boolean,
    Label:String,
    Number:String
    estilo:Boolean
}

export const Overview_Panel = ( {
    Position='Begin',State='Aberto',Selected=true, Label='Arrecadado', Number='1',estilo=true,
}: IOverviewPanel)=>{
    return(
        <div className={`content-${Selected}`}>
            <div className={`position-${Position}`}>
                <div className={`overview-${State}`}><h5>{State}</h5></div>
                <div className='Number'><p>{Number}</p></div>
            </div>

        </div>
    );
}
export default Overview_Panel
