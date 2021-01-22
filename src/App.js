import React from 'react';
import { Provider } from './context/StarWarsContext';
import './App.css';
import Pagina from './Pagina';

function App() {
  return (
    <Provider>
      <Pagina />
    </Provider>
  );
}

export default App;
