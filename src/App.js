
import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import ItemDetailContainter from './componentes/ItemDetailContainer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <ItemListContainer />
    <ItemDetailContainter itemId={2} />
    </div>
  );
}

export default App;
