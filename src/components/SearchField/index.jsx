import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const SearchField = () => {
  const {
    state: {
      filters: {
        filterByName: { name },
      },
    },
  } = useContext(StarWarsContext);
  const { dispatch } = useContext(StarWarsContext);

  const searchName = ({ target }) => {
    const { value } = target;
    dispatch({ type: 'SEARCH_NAME', name: value });
  };

  return (
    <input
      type="text"
      value={ name }
      onChange={ searchName }
      data-testid="name-filter"
    />
  );
};

export default SearchField;
