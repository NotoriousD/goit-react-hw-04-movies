import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Router from './router/Router'

function App() {
  return (
      <div className="App">
        <Header />
        <Router />
      </div>
  );
}

export default App;
