import logo from './logo.svg';
import './App.css';
import Accoridian from './components/Accoridian';
import RandomColor from './components/random-colos';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';

function App() {
  return (
    <div className="App">
      {/* Accoridion Component */}
        {/* <Accoridian /> */}

      {/* Random Component */}
      {/* <RandomColor /> */}

      {/* Star-Rating Component */}
      {/* <StarRating  /> */}

      {/* Image Slide Component */}
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'5'} />
    </div>
  );
}

export default App;
