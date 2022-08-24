import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderNavigation from './components/HeaderNavigation';
import PinCard from './components/PinCard';

function App() {
  return (
    <div className="container">
      <Header>
        <HeaderNavigation />
      </Header>
      <PinCard />
      <Footer />
    </div>
  );
}

export default App;
