import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Step2 from './components/Step2';
import Step3 from './components/Step3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    < BrowserRouter >
     <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/step2" element={<Step2/>} />
            <Route path="/step3" element={<Step3/>} />
         </Routes></BrowserRouter>
    
);

