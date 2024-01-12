import logo from './logo.svg';
import './App.css';
import Accoridian from './components/Accoridian';
import RandomColor from './components/random-colos';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import GithubProgileFinder from './components/github-profile-fider';

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
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'5'} /> */}

      {/* Product Component */}
      {/* <LoadMoreData /> */}

      {/* Generator QR Code */}
      {/* <QRCodeGenerator /> */}

      {/* Light and Dark Theme Switch  */}
      {/* <LightDarkMode /> */}

      {/* Scroll indicator */}
      {/* <ScrollIndicator url={'https://6593ea911493b01160697424.mockapi.io/datas'} /> */}


      {/* Taps Component */}
      {/* <TabTest /> */}

      {/* Gitbub profile component */}
      <GithubProgileFinder />
      
    </div>
  );
}

export default App;
