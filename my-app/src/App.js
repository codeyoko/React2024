import logo from './logo.svg';
import './App.css';
import Accoridian from './components/Accoridian';
import RandomColor from './components/random-colos';
import Search from './components/weather-app/search';
import Weather from './components/weather-app/weather-info';

function App() {
  return (
    <div className="App">
      {/* Accoridion Component */}
        {/* <Accoridian /> */}

      {/* Random Component */}
      {/* <RandomColor /> */}

      {/* Weather app */}
      <Weather />
    </div>
  );
}

export default App;
