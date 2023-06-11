function OutraLista({itens}){
    return(
        <>
            <h3>lista das coisas</h3>
            

            {/* tratamento caso a array chegue vazia utilizando ternario */}
            {itens.length > 0 ? (
                itens.map((item, index)=> (
                    <p key={index}> {item}</p>
                ))
            ) : (<p>nao exite nada nesta lista</p>
            )}
                
        </>
    )
}

export default OutraLista