import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import { AppRouter } from './router/AppRouter';

import './styles/gird.css'
import { Navbar } from './views/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Navbar/> */}
      <AppRouter/>
      
    </BrowserRouter>
  </React.StrictMode>
);

