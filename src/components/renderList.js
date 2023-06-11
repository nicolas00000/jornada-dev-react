import { useState  } from 'react'
import OutraLista from './outraLista'

function RenderList(){
    const meusItens = ['react', 'vue', 'angular'] 
    return(
        <div>
            <h2>Render </h2>
            <OutraLista itens={meusItens}/>

                <br></br>
            <OutraLista itens={[]}/>
        </div>
    )
}

export default RenderList