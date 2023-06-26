import './App.css';
import LandingPage from './components/Landing';
import ProductList from './components/ProductList';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <LandingPage/>
      <ProductList/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
