import './App.css';
import React, { useState } from 'react';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Modal from './components/Modal';
import About from './components/About';
import Settings from './components/Settings';

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return(
    <div className="app-container">
      <Header />
      <div className="content-container">
      <Routes>
        <Route 
          path="/" 
          element={<Homepage modalVisible={modalVisible} setModalVisible={setModalVisible} />} 
        />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </div>
    </div>
  );
}

export default App;