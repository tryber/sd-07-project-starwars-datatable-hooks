import React, { useState, useEffect } from 'react';
import './App.css';
import SWContext from './context/SWContext';
import Table from './components/Table';

function App() {
  const [apiResponse, setResponse] = useState();

  useEffect(() => {
    if (apiResponse === undefined) {
      const fetchFromApi = async () => {
        try {
          const data = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
            .then((response) => response.json());
          setResponse(data.results);
        } catch (error) {
          console.log(error);
        }
      };
      fetchFromApi();
    }
  }, [apiResponse]);
  return (
    <div className="App">
      <SWContext.Provider value={ apiResponse }>
        <Table />
      </SWContext.Provider>
    </div>
  );
}

export default App;
