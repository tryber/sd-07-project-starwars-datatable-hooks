import React from 'react';
import Home from './pages/Home';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
