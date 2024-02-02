import './App.css';
import { Checkout } from './components/checkout/Checkout';
import { Navbar } from './components/navbar/Navbar';
import { CheckoutPage } from './pages/CheckoutPage';

import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { ProductPage } from './pages/ProductPage';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div className="">
      <Navbar />
      {/* <ProductPage /> */}
      {/* <ProductDetailsPage /> */}
      {/* <Checkout/> */}
      {/* <CheckoutPage /> */}
      <AllRoutes />
    </div>
  );
}

export default App;
