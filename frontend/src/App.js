import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { ProductDetails } from './components/product/ProductDetails';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <div className="">
      <Navbar />
      {/* <ProductPage /> */}
      <ProductDetails />
    </div>
  );
}

export default App;
