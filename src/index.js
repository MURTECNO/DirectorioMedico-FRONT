import React from 'react';
import ReactDOM from 'react-dom/client';
import { CardDoctor } from './Components/CardDoctor';
import { Navbar } from './views/Navbar';
import './styles/gird.css'
import { SearchDoctor } from './Components/SearchDoctor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <SearchDoctor/>
    {/* <CardDoctor /> */}
  </React.StrictMode>
);

