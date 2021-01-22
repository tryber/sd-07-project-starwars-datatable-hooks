import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import useFetch from '../hook/useFetch';

const RenderForm = () => {
  const context = useContext(StarWarsContext);
  const { state, setState } = context;
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = useFetch(url);
  useEffect(() => {
    setState({ ...state, data: response });
  }, [response]);
  return (
    <div>
      <div>
        <label htmlFor="name">
          Filtrar por nome
          <input
            type="text"
            id="name"
            data-testid="name-filter"
            onChange={ (event) => setState({
              ...state,
              filters: { filterByName: { name: event.target.value } },
            }) }
          />
        </label>
      </div>
    </div>
  );
};

export default RenderForm;
