import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Provider from './Provider/Provider';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <section className="death-star">
        <div className="millenium-falcon">
          <Dashboard />
          <Table />
        </div>
      </section>
    </Provider>
  );
}

export default App;
