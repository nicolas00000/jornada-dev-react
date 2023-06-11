import './App.css';
import {useState}  from  'react'
import SeuNome from './components/SeuNome'
import Saudacao from './components/saudacao';

function App() {

  const [nome, setNome] = useState()
  return (
    <div className="App">
      <h1>State Lift</h1>
      {/* chama o componente com input para digitar o nome conseguindo
          guardar o value do input aqui na constante NOME, podendo utilizar em qualquer lugar */}
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
  
    </div>
  );
}

export default App;
