import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import useFetch from '../hook/useFetch';

const RenderForm = () => {
  const context = useContext(StarWarsContext);
  // console.log(context) //obj {state: initialState, setState: fn}
  const { state, setState } = context;
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = useFetch(url);
  useEffect(() => {
    setState({ ...state, data: response });
  }, [context, response, state, setState]);

  return (
    <div>
      <h1>Eu sou o RenderForm</h1>
    </div>
  );
};

export default RenderForm;
