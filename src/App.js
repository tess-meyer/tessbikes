import './App.css';
import LandingPage from './components/Landing';
import ProductList from './components/ProductList';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <ProductList/>
      <About/>
    </div>
  );
}

export default App;
