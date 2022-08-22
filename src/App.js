import './App.css';
import Header from './components/Header';
import HeaderNavigation from './components/HeaderNavigation';

function App() {
  return (
    <div className="container">
      <Header>
        <HeaderNavigation />
      </Header>
    </div>
  );
}

export default App;
