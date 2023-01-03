import './App.css';

import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

//Pages
import Home from './pages/Home/Home.js'
import About from './pages/About/About.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
