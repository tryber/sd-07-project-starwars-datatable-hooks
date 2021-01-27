import React from 'react';
import Home from './pages/Home';
import StarWarsProviders from './providers/StarWarsProviders';

function App() {
  return (
    <StarWarsProviders>
      <Home />
    </StarWarsProviders>
  );
}

export default App;
