import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddNew } from './Component/AddRestaurant';
import { Navbar } from './Component/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/new" element={<AddNew/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

