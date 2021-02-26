import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  const teste = 'teste';
  const boll = teste.match(/ES/i);
  console.log(boll);

  return (
    <StarWarsProvider>
      <HomePage />
    </StarWarsProvider>
  );
}

export default App;
