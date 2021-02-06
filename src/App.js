import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// project based on Thiago pederzoli code -Thx!;

function App() {
  return (
    <div className="App">
      <Provider>
        <div className="header">
          <Header />
        </div>
        <div>
          <Table />
        </div>

      </Provider>

    </div>
  );
}

export default App;
