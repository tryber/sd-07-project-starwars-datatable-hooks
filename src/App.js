import React from 'react';
import TablePage from './pages/TablePage';
import Provider from './context/Provider';

function App() {
  return (
    <div>
      <Provider>
        <TablePage />
      </Provider>
    </div>
  );
}

export default App;
