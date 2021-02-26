import React from 'react';
import Provider from './context/Provider';
import StarWarsPage from './pages/StarWarsPage';

function App() {
  return (
    <Provider>
      <div className="App">
        <StarWarsPage />
      </div>
    </Provider>
  );
}

export default App;
