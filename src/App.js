import React from 'react';

import { StarWarsProvider } from './context/Provider';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      SW datatable
    </StarWarsProvider>
  );
}

export default App;
