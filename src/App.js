import React from 'react';
import './App.css';
import Home from './Components/Home';
import StartWarsProvider from './Provider/StartWarsProvider';

function App() {
  return (
    <StartWarsProvider>
      <div className="App">
        <Home />
      </div>
    </StartWarsProvider>
  );
}

export default App;
