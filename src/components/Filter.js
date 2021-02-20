import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterPlanets() {
  const { setName } = useContext(MyContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setName(value);
  };

  return (
    <div>
      <label htmlFor="name-filter">
        Filtro de Planetas
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          /* onChange={(event) => setName(event.target.value)} */
          onChange={ (event) => handleChange(event) }
        />
      </label>
    </div>
  );
}

export default FilterPlanets;
