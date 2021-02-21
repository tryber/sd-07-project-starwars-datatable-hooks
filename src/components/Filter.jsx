import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filter = () => {
  const { searchText, setSearchText } = useContext(StarWarsContext);

  const sendCurrentSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (e) => sendCurrentSearch(e) }
      />g
    </div>
  );
};

export default Filter;
