import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import logo from './img/logo-2.png';
import { Canvas } from '@react-three/fiber';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <img src={logo} alt="logo"    />
    </header>
        <Canvas>
      <App />
    </Canvas>
  </React.StrictMode>
);


