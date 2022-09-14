import 'bootstrap/dist/css/bootstrap.min.css';
 import logo from './logo.svg';
import './App.css';
import  NavBar  from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemListContainer/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <header className="App-header">
       { <ItemListContainer /*Camisetas={20} onAdd={(valor)=>{console.log(valor)}}*//> }
       {/* { <ItemCount  Camisetas={20} onAdd={(valor)=>{console.log(valor)}} ></ItemCount> } */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <ItemDetailContainer />
        
      </header>
    </div>
  );
}

export default App;
