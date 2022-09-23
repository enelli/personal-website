import './App.css';
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import Introduction from './pages/Introduction';
import Landing from './pages/Landing';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <ParallaxBanner style={{
          height: "100vh",
          overflow: "auto !important"
        }} >
          <ParallaxBannerLayer
            speed={10}
          >
            <Landing />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer
            speed={-20}
            translateY={[90, 0]}
            inset={0}
          >
            <Introduction/>
            <Experience/>
            <Projects/>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </ParallaxProvider>
    </div>
  );
}

export default App;
