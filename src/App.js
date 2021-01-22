import React from 'react';
import StarWarsPlanets from './pages/StarWarsPlanets';
import { Provider } from './context/StarWarsContext';

function App() {
  return (
    <Provider>
      <StarWarsPlanets />
    </Provider>
  );
}

export default App;
