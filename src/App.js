import React, { useEffect, useState } from 'react';
import fetchAPI from './services/fetchAPI';
import StarWarsContext from './context/StarWarsContext';
import Table from './components/Table';
import './App.css';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchAPI().then((r) => setData(r));
  }, []);

  return (
    <StarWarsContext.Provider value={ { data } }>
      <div>
        {data ? <Table /> : <p>Loading...</p>}
      </div>
    </StarWarsContext.Provider>
  );
}

export default App;
