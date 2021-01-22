import React from 'react';

import StarWarsProvider from './Context/StarWarsProvider';
import StarWars from './StarWars';

function App() {
  return (
    <StarWarsProvider>
      <StarWars />
    </StarWarsProvider>
  );
}

export default App;
