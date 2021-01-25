import React from 'react';

import Planets from './components/Planets';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Planets />
      </div>
    </Provider>
  );
}

export default App;
