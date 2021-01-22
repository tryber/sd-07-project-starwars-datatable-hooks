import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterByNumber = () => {
  const {
    setFilterColumn,
    setFilterComparison,
    setFilterValue,
  } = useContext(StarWarsContext);

  const handleChangeColumn = ({ target: { value } }) => {
    setFilterColumn(value);
  };

  const handleChangeComparison = ({ target: { value } }) => {
    setFilterComparison(value);
  };

  const handleChangeValue = ({ target: { value } }) => {
    setFilterValue(value);
  };

  return (
    <div className="input-group mb-3">
      <select
        data-testid="column-filter"
        onChange={ handleChangeColumn }
      >
        <option value="">Select a filter</option>
        <option value="population">Population</option>
        <option value="orbital_period">Orbital Period</option>
        <option value="diameter">Diameter</option>
        <option value="rotation_period">Rotation Period</option>
        <option value="surface_water">Surface Water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleChangeComparison }
      >
        <option value="">Select an option</option>
        <option value="maior que">Maior que</option>
        <option value="igual a">Igual a</option>
        <option value="menor que">Menor que</option>
      </select>
      <input
        data-testid="value-filter"
        placeholder="Type a number"
        onChange={ handleChangeValue }
      />
    </div>
  );
};

export default FilterByNumber;
