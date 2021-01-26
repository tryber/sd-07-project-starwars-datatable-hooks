import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home';
import StarWarsContext from './Context/StarWarsContext';

function App() {
  const [data, setWords] = useState([]);
  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

  async function getApi() {
    const { results } = await fetch(endPoint).then((response) => response.json());
    setWords(results);
  }

  useEffect(() => { getApi(); }, []);

  return (
    <StarWarsContext.Provider value={ data }>
      <div className="App">
        <Home />
      </div>
    </StarWarsContext.Provider>
  );
}

export default App;
