import React from 'react';
import './App.css';
import StarWarsContext from './context/StarWarsContext';
import Home from './pages/Home';

function App() {
  return (
    <StarWarsContext>
      <Home />
    </StarWarsContext>
  );
}

export default App;
