import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"

import Nav from './components/nav';
import Home from './pages/home/index';
import Favorites from './pages/favorites/index';
import Details from './pages/details/index';
function App() {
  return (
    <div >
      <Nav />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/favorites" element={ <Favorites /> } />
        <Route  path="/recipe-item/:id" element={ <Details /> } />
      </Routes>
    </div>
  );
}

export default App;
