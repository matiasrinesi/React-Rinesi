import 'bootstrap/dist/css/bootstrap.min.css';
 import logo from './logo.svg';
import './App.css';
import  NavBar  from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemListContainer/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Router from './app/Router';

function App() {
  return (
    
    <div className="App">
    <header className="App-header">
      <Router />



    </header>
  </div>
  );
}

export default App;
