import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filter = () => {
  const { filters, setFilters } = useContext(StarWarsContext);
  const [currNumFilter, setCurrNumFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const sendCurrentSearch = (e) => {
    const text = e.target.value;
    setFilters({ ...filters, filterByName: { name: text } });
    console.log(filters);
  };

  useEffect(() => {
    console.log(filters);
  });

  const sendNumericFilter = (e) => {
    e.preventDefault();
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        currNumFilter,
      ],
    });

    // console.log(currNumFilter);
    // e.preventDefault();
    // setFilters({
    //   ...filters,
    //   filterByNumericValues: filters.filterByNumericValues.push(currNumFilter),
    // });
    // // const data = e.target;
  };

  const handleNumericFilterChange = (e) => {
    const { value } = e.target;
    setCurrNumFilter({
      ...currNumFilter,
      [e.target.name]: value,
    });
    console.log(currNumFilter);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (e) => sendCurrentSearch(e) }
      />
      <form>
        <select
          data-testid="column-filter"
          name="column"
          value={ currNumFilter.column }
          onChange={ (e) => handleNumericFilterChange(e) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ currNumFilter.comparison }
          onChange={ (e) => handleNumericFilterChange(e) }
        >
          <option value="maior que" name="maior que">maior que</option>
          <option value="menor que" name="menor que">menor que</option>
          <option value="igual a" name="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          name="value"
          value={ currNumFilter.value }
          onChange={ (e) => handleNumericFilterChange(e) }
        />
        <button
          type="submit"
          data-testid="button-filter"
          onClick={ sendNumericFilter }
        >
          Filtrar
        </button>
      </form>

    </div>
  );
};

export default Filter;
