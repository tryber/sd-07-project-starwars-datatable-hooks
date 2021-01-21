import React from 'react';
import Provider from './context/Provider';
import InitialPage from './pages/InitialPage';

function App() {
  return (
    <Provider>
      <InitialPage />
    </Provider>
  );
}

export default App;
