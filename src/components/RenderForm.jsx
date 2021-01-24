import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import useFetch from '../hook/useFetch';
import FilterByName from './FilterByName';
import FilterNumeric from './FilterNumeric';

const RenderForm = () => {
  const context = useContext(StarWarsContext);
  const { state, setState, allContext } = context;
  const { filterName } = allContext;
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = useFetch(url);

  useEffect(() => {
    setState({ ...state, data: response });
  }, [response]);

  useEffect(() => {
    setState({ ...state, filters: { filterByName: { name: filterName } } });
  }, [filterName]);

  return (
    <div>
      <FilterByName />
      <div>
        <FilterNumeric />
      </div>
    </div>
  );
};

export default RenderForm;
