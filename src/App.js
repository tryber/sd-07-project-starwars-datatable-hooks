import React from 'react';
import Home from './pages/Home';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <h1>Planets</h1>
      <Home />
    </Provider>
  );
}

export default App;
