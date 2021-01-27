import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StarWarsProvider from './context/StarWarsProvider';
import StarWars from './pages/StarWars';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <StarWars />
    </StarWarsProvider>
  );
}

export default App;
