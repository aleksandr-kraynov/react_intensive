import React from 'react';
import './App.scss';
import MainPage from '@components/pages/MainPage';
import DetailPage from '@components/pages/DetailPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail/:id" element={<DetailPage />}/>
        </Routes>
      </BrowserRouter>              
    </div>  
  );
}

export default App;