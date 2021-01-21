import React, { useEffect, useState } from 'react';
import Table from './components/table';
import StarWarsContext from './context/StarWarsContext';
import starWarsAPI from './services/starWarsAPI';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getPlanets() {
      setData(await starWarsAPI())
    }
    getPlanets();
  }, [])

  const context = {
    data,
  }
  return (
    <StarWarsContext.Provider value={context}>
      <h1>Star Wars</h1>
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;
