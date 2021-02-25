import React from 'react';
// import StarWarsContext from '../context/StarWarsContext';

function FilterBar() {
  // const { filters, setFilters } = React.useContext(StarWarsContext);

  React.useEffect(() => {
  });

  return (
    <div>
      <form>
        <label htmlFor="Name">
          Name:
          <input
            type="text"
            data-testid="name-filter"
          />
        </label>
      </form>
    </div>
  );
}

export default FilterBar;
