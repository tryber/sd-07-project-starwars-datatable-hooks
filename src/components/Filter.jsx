import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filter = () => {
  const { filters, setFilters } = useContext(StarWarsContext);

  const sendCurrentSearch = (e) => {
    const text = e.target.value;
    setFilters({ filterByName: { name: text } });
    console.log(filters);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (e) => sendCurrentSearch(e) }
      />
    </div>
  );
};

export default Filter;
