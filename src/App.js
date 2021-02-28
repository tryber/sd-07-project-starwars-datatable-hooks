import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <HomePage />
    </StarWarsProvider>
  );
}

export default App;
