import React from 'react';
import { Provider } from './context/StarWarsContext';
import Home from './pages/Home';

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
