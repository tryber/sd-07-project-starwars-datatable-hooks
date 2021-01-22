import React from 'react';
import Table from './component/Table';
import Provider from './context/Provider';

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
