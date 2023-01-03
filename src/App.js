import './App.css';

import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

//Pages
import Home from './pages/Home/Home.js'
import About from './pages/About/About.js'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
