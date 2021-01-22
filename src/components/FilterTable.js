import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../css/Form.css';

function FilterTable() {
  const {
    filters: { filterByName: { name } },
    setName,
  } = useContext(StarWarsContext);
  console.log(name);

  const saveName = ({ target }) => {
    const { value } = target;
    setName(value);
  }

  return (
    <form className="form-container">
      <div className="input-container">
        <label htmlFor="name">
          NAME PLANET
          <input
            type="text"
            name="name"
            id="name"
            value={ name }
            onChange={ saveName }
            data-testid='name-filter'
          />
        </label>
      </div>
    </form>
  );
}

export default FilterTable;
