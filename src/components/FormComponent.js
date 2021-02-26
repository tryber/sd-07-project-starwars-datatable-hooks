import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function Form() {
  const {
    options,
    filters,
    setClick,
    setFilters,
  } = useContext(StarWarsContext);

  const [aux, setAux] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  const handleClick = () => {
    const { column, value } = aux;
    if (column && value) {
      setFilters({ ...filters,
        filterByNumericValues: [...filters.filterByNumericValues, aux] });
      const newOptions = options.filter((option) => option !== column)[0];
      setAux({ column: newOptions, comparison: aux.comparison, value: '' });
    }
    setClick(true);
  };

  // const reset = () => {
  //   (
  //     setOptions({
  //       population: true,
  //       orbital_period: true,
  //       diameter: true,
  //       rotation_period: true,
  //       surface_water: true,
  //     }));
  //   setData({ dataOrigin });
  // };

  const selectOptions = () => (
    <select
      id="column"
      data-testid="column-filter"
      name="column"
      onChange={ (event) => {
        setAux({ ...aux, column: (event.target.value) });
      } }
    >
      { options
        .map((column) => (
          <option key={ column } value={ `${column}` }>
            { column }
          </option>
        ))}
    </select>
  );

  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Search by name"
          name="name"
          onChange={ (event) => setFilters(
            { ...filters, filterByName: { name: event.target.value } },
          ) }
        />
        { selectOptions() }
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ (event) => setAux({ ...aux, comparison: (event.target.value) }) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          placeholder="value"
          name="value"
          value={ filters.filterValue }
          onChange={ (event) => setAux({ ...aux, value: (event.target.value) }) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleClick() }
        >
          Search by value
        </button>
      </form>
      <br />
      <div>
        { filters.filterByNumericValues
          .map((element, index) => (
            <div key={ index }>
              <p>
                <span><b>Filtro aplicado: </b></span>
                <span>{ element.column }</span>
                <span> - </span>
                <span>{ element.comparison }</span>
                <span> - </span>
                <span>{ element.value }</span>
                <span> </span>
                <button
                  type="button"
                  name="button"
                  data-testid="filter"
                  // onClick={ () => reset(dataOrigin) }
                >
                  X
                </button>
              </p>
            </div>)) }
        <br />
      </div>
    </div>
  );
}

export default Form;
