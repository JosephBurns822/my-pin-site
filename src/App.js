import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Collection from './pages/Collection';
import Store from './pages/Store';
import AboutMe from './pages/AboutMe';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
