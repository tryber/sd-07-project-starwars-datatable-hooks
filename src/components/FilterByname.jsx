import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Planets() {
  const getPlanetsStateGlobal = useContext(StarWarsContext);
  const { setFilterOfName } = getPlanetsStateGlobal;

  const handleChange = ({ target: { value } }) => {
    setFilterOfName({ value });
  };
  return (
    <div>
      <input name="filter-name" onChange={ handleChange } />
    </div>
  );
}

export default Planets;
