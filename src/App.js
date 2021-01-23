import React from 'react';
import Provider from './context/Provider';
import Planets from './pages/Planets';
import './css/App.css';

function App() {
  return (
    <Provider className="App">
      <Planets />
    </Provider>
  );
}

export default App;
