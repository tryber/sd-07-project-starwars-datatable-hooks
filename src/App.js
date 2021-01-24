import React from 'react';
import StarWars from './pages/StarWars';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <StarWars />
    </Provider>
  );
}

export default App;
