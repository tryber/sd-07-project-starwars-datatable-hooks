import React from 'react';
import Provider from './context/Provider';
import Home from './components';

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
