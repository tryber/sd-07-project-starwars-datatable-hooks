import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { setName } = useContext(StarWarsContext);

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Search"
        name="name"
        onChange={ (e) => setName(e.target.value) }
      />
    </form>
  );
}

export default Filter;
