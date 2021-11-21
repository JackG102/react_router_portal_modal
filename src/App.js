import './App.css';
import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import About from './components/About';
import Settings from './components/Settings';


const App = () => {
  return(
    <div className="app-container">
      <Header />
      <div className="content-container">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;