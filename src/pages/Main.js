import React, { useEffect, useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from '../components/Table';
import Search from '../components/Search';

function Main() {
  const { filters, data, dataIsEmpty } = useContext(StarWarsContext);
  const [planetsData, setPlanetsData] = useState([]);

  useEffect(() => {
    setPlanetsData(data);
  }, [data]);

  const handleDataFilters = async () => {
    const { filterByName: { name }, filterByNumericValues } = filters;
    const ZERO = 0;

    if (name) {
      const newData = data.filter((planet) => (
        planet.name.toLowerCase().includes(name.toLowerCase())
      ));
      setplanetsData(newData);
    }

    if (filterByNumericValues.length > ZERO) {
      const lastFilter = filterByNumericValues.length - 1;
      const { column, comparison, value } = filterByNumericValues[lastFilter];

      const operator = {
        'maior que': (a, b) => Number(a) > Number(b),
        'menor que': (a, b) => Number(a) < Number(b),
        'igual a': (a, b) => Number(a) === Number(b),
      };

      const newData = data.filter((planet) => (
        (operator[comparison](planet[column], value) && planet[column] !== 'unknown')
          ? planet
          : undefined
      ));

      setplanetsData(newData);
    }

    if (!name && !(filterByNumericValues.length > ZERO)) {
      setplanetsData(data);
    }
  };

  useEffect(() => {
    handleDataFilters();
  }, []);

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
