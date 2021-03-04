import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterBar() {
  const { onNameChange } = React.useContext(StarWarsContext);

  React.useEffect(() => {

  });

  return (
    <div>
      <form>
        <label htmlFor="Name">
          Name:
          <input
            id="name"
            name="name"
            type="text"
            data-testid="name-filter"
            onChange={ (event) => onNameChange(event.target.value) }
          />
        </label>
      </form>
    </div>
  );
}

export default FilterBar;
