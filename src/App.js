import React from 'react';
import Provider from './context/Provider';
import Table from './components/table';

function App() {
  return (
    <Provider>
      <div>
        <Table />
      </div>
    </Provider>
  );
}

export default App;
