import React from 'react';
import StarWarsContext from './context/StarWarsContext';

const Filters = () => {
  const {
    filters,
    filters: { filterByName: { name } },
    setFilters,
  } = React.useContext(StarWarsContext);

  const handleChange = ({ value }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  return (
    <div>
      <input
        placeholder="Filtre por nome"
        type="text"
        value={ name }
        data-testid="name-filter"
        onChange={ (e) => handleChange(e.target) }
      />
    </div>
  );
};

export default Filters;
