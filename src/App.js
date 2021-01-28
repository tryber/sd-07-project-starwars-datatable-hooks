import React from 'react';
import StarWars from './pages/StarWars';
import Provider from './utils/Provider';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <StarWars />
      </Provider>
    </div>
  );
}

export default App;
