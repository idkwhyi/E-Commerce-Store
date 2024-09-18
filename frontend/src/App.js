import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import { UserProvider } from './context/UserContext';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import Products from './pages/products/Products';
import ProductDetails from './pages/products/ProductDetails';
import ViewCart from './pages/products/ViewCart';

function App() {

  return (
    <UserProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot_password' element={<ForgotPassword />} />
          <Route path='/products' element={<Products/>} />
          <Route path='/products/:category' element={<Products/>} />
          <Route path='/products/details/:productId' element={<ProductDetails/>} />
          <Route path='/cart' element={<ViewCart/>} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
