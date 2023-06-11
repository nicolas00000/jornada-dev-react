import logo from './logo.svg';
import './App.css';
import Button from  './components/button'



function App() {
  function ativarAlerta(){
    alert("fui cluicado")
  }

  return (
    <div className="App">
      <Button event={ativarAlerta} text="clique em mim para ativar uma função"/>
    </div>
  );
}

export default App;
