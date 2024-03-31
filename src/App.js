
import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import ItemDetailContainter from './componentes/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './componentes/Nosotros';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
    
            <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainter />} />
            <Route path='/productos' element={<ItemListContainer/>} />
            <Route path='/productos/:categoria' element={<ItemListContainer/>} />
            <Route path="/nosotros" element={<Nosotros />}/>
            
          </Routes>    
    
    
       </BrowserRouter>
 
    </div>
  );
}

export default App;
