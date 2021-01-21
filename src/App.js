import React from 'react';
import Provider from './context/Provider';
import Planets from './components/Planets';
import './App.css';

function App() {
  return (
    <Provider>
      <Planets />
    </Provider>
  );
}

export default App;
