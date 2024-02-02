import './App.css';
import { Checkout } from './components/checkout/Checkout';
import { Navbar } from './components/navbar/Navbar';
import { CheckoutPage } from './pages/CheckoutPage';

import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <div className="">
      <Navbar />
      {/* <ProductPage /> */}
      {/* <ProductDetailsPage /> */}
      {/* <Checkout/> */}
      <CheckoutPage />
    </div>
  );
}

export default App;
