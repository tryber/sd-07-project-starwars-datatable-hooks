import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import Header from './component/Header';
import Tablet from './component/Tablet';
import './App.css';

function App() {
  return (
    <div>
      <StarWarsProvider>
        <Header />
        <Tablet />
      </StarWarsProvider>
    </div>
  );
}

export default App;
