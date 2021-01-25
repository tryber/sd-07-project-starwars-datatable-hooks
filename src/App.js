import React from 'react';
import Table from './component/Table';
import Provider from './context/Provider';

function App() {
  return (
    <div>
      <Provider>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
