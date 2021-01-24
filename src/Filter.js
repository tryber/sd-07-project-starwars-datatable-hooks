import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';

const Filter = () => {
  const { filterText } = useContext(StarWarsContext);
  // console.log(Object.entries(filter)[0][1])
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (event) => filterText(event.target.value) }
      />
      {/* <div>
        {Object.entries(filter)[0][1]}
      </div> */}
    </div>
  );
};

export default Filter;
