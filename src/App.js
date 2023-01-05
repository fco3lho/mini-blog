import './App.css';

import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

//Context
import { AuthProvider } from './context/AuthContext';

//Pages
import Home from './pages/Home/Home.js'
import About from './pages/About/About.js'
import Register from './pages/Register/Register.js'
import Login from './pages/Login/Login.js'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Navbar/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
