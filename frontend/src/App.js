import './App.css';
import { Cart } from './components/cart/Cart';
import { Checkout } from './components/checkout/Checkout';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer'
import { CheckoutPage } from './pages/CheckoutPage';

import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { ProductPage } from './pages/ProductPage';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div className="">
      <Navbar />
      <AllRoutes />
      {/* <Cart /> */}
      <Footer/>
    </div>
  );
}

export default App;
