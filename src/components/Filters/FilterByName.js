import React, { useState, useEffect } from 'react';
import useGlobal from '../../hooks/useGlobal';

const FilterByName = () => {
  const [globalState, setFilter] = useGlobal('');
  const [name, setName] = useState({});

  useEffect(() => {
    setFilter(name);
  }, [name]);

  return (
    <div className="search">
      <form>
        <label htmlFor="name">
          <input
            id="name"
            type="text"
            name="name"
            data-testid="name-filter"
            onChange={ (event) => setName(event.target.value) }
          />
        </label>
      </form>
    </div>
  );
};

export default FilterByName;
