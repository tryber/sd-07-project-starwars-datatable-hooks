import React, { useEffect, useContext } from 'react';

import StarWarsContext from './Context/StarWarsContext';

import Table from './Components/Table';
import SearchInput from './Components/SearchInput';
import Filters from './Components/Filters';

const StarWars = () => {
  const { setData, setFilteredData } = useContext(StarWarsContext);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((res) => res.json())
      .then((response) => setData(() => {
        setFilteredData(response.results);
        return response.results;
      }));
  }, [setData, setFilteredData]);

  return (
    <>
      <SearchInput />
      <Filters />
      <Table />
    </>
  );
};

export default StarWars;
