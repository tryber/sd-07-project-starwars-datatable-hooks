import React from 'react';
import './App.css';
import Provider from './context/GlobalProvider';
import TableView from './view/TableView';

function App() {
  return (
    <Provider>
      <TableView />
    </Provider>
  );
}

export default App;
