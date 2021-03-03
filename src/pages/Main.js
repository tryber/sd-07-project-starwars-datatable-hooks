import React, { useEffect, useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from '../components/Table';

function Main() {
  const { filters, data, dataIsEmpty } = useContext(StarWarsContext);
  const [planetsData, setPlanetsData] = useState([]);

  useEffect(() => {
    setPlanetsData(data);
  }, [data]);

  const handleDataFilters = () => {
    const { filterByName: { name } } = filters;

    if (name) {
      const newData = data.filter((planet) => (
        planet.name.toLowerCase().includes(name.toLowerCase())
      ));
      setplanetsData(newData);
    }

    if (!name) {
      setplanetsData(data);
    }
  };

  useEffect(() => {
    handleDataFilters();
  }, [filters]);

  return (
    <div>
      <h1>Star Wars Planets Database</h1>
      { !dataIsEmpty && <Search /> }
      { !dataIsEmpty && <Table data={ planetsData } /> }
      { dataIsEmpty && 'Loading...' }
    </div>
  );
}
export default Main;
