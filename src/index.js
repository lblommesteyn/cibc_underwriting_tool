import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Walkthrough from './Walkthrough';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/walkthrough" element={<Walkthrough />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
