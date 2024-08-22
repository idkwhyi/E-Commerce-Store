import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';

function App() {

  const [loginStatus, setLoginStatus] = useState(false)
  const [user, setUser] = useState({
    'userId': '',
    'username': '',
    'email': '',
    // 'password': '',
    'address': '',
    'phone': ''
  })



  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home userData={user} loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>} />
          <Route path='/login' element={<Login setLoginStatus={setLoginStatus} setUser={setUser}/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/forgot_password' element={<ForgotPassword/>} />
        </Routes>
      </Router>
  );
}

export default App;
