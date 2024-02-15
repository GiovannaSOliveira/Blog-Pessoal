import Home from './pages/home/Home';
import {useState} from 'react';
import './App.css';


function App() {
  const [valor, setValor] = useState(0);
  function handleClick() {setValor(valor+1);}
  
  return (
    <div>
      <Home  title="Acesso de Schrodinger"
    description="Muito e pouco acessado."/>
    <h1>Acessos ao site {valor}</h1>
    <button onClick={handleClick}> +1 Acesso </button>
    </div>
   
          
    
  );
}

export default App;