import {useState} from 'react'

function Condicional(){

    const [ email  , setEmail ] =useState()
    const [userEmail , setUserEmail] = useState()


    
    /* ao clicar no botao ele chama a funcao */
    function enviarEmail(e){
        //INTERROPE O RELOAD DA PAGINA
        e.preventDefault()
        // pega o resultado final da escrita e transforma na constante userEmail
        setUserEmail(email)
    }


    return(
        <div>
            <h2> cadastre seu email</h2>
            <form>
                <input type='email'
                    placeholder='digite seu email' 
                    // a cada letra digitada ele pega e adiciona na variavel EMAIL
                    onChange={(e) => setEmail(e.target.value)}>
                </input>

                <button onClick={enviarEmail}> enviar </button>
                <br/>
            {email}
            {/* se o email estiver completo sendo True passa a validação */}
            {/*posso fazer qualquer validacção aqui dentro para a renderizacao  */}
            {userEmail && (
                <div>
                    <p> o email do usuarui é {userEmail}</p>
                </div>
            )}
            </form>

        </div>
    )
}

export default Condicional