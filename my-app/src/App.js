import logo from './logo.svg';
import './App.css';
import Accoridian from './components/Accoridian';
import RandomColor from './components/random-colos';
import {Routes, Route} from "react-router-dom"
import Home from './project05-shopping-card/pages/home';
import Cart from './project05-shopping-card/pages/cat';
import Header from './project05-shopping-card/components/header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/cart" element={ <Cart /> } />

      </Routes>

    </div>
  );
}

export default App;
