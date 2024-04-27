import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import ShoppingList from './pages/ShoppingList';

import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/list' element={<ShoppingList />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>


      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
