import './App.css';
import './styles/stylesheet.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Collection from './pages/Collection';
import Trade from './pages/Trade';
import BuySell from './pages/BuySell';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    
    // <div className="container">
    //   <Header>
    //     <HeaderNavigation />
    //   </Header>
    //   <PinCard />
    //   <Footer />
    // </div>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/trading" element={<Trade />} />
      <Route path="/store" element={<BuySell />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
