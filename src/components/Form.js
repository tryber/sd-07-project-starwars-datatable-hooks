import React, { useContext } from 'react';
import SWContext from '../context/Context';

export default function Form() {
  const {
    filters: {
      filterByName: { name },
    },
    setName,
  } = useContext(SWContext);
  const handleChange = ({ target }) => setName(target.value);
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={ handleChange }
          value={ name }
          data-testid="name-filter"
        />
      </form>
    </div>
  );
}
