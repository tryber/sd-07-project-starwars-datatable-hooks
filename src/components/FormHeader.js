import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FormHeader() {
  const { setFilterByName } = useContext(StarWarsContext);

  const handerChangeName = ({ target }) => {
    setFilterByName(target.value);
  };
  return (
    <form>
      <input data-testid="name-filter" type="text" onChange={ handerChangeName } />
    </form>
  );
}

export default FormHeader;
