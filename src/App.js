import 'bootstrap/dist/css/bootstrap.min.css';
 import logo from './logo.svg';
import './App.css';
import  NavBar  from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemListContainer/ItemCount';

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <header className="App-header">
       <ItemListContainer Camisetas={20}/>
       <ItemCount  Camisetas={20} ></ItemCount>
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
        
      </header>
    </div>
  );
}

export default App;
