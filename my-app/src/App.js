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
import SearchAutoComplete from './components/search-autocomple-with-api';
import TicTacToe from './components/tic-tac-toe';
import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag';
import UseFetchHookTest from './components/user-fetch-hook/test';
import UseOnClickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';

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
      {/* <GithubProgileFinder /> */}

      {/* Search autocomplete component */}
      {/* <SearchAutoComplete /> */}

      {/* Tic-tac-toe Component */}
      {/* <TicTacToe /> */}

      {/* Feature Flag */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* Use Fetch Hook */}
      {/* <UseFetchHookTest /> */}

      {/* Use Outside Click Hook */}
      {/* <UseOnClickOutsideTest /> */}

      {/* Use Window Resize Hook */}
      <UseWindowResizeTest />
    </div>
  );
}

export default App;
