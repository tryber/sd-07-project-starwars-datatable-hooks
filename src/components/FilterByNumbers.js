import React, { useContext, useState } from 'react';
import { Button } from 'reactstrap';
import StarWarsContext from '../context/StarWarsContext';

function Header() {
  const state = useContext(StarWarsContext);
  const { data, inputNumbers, setInputNumbers, setFilteredPlanets } = state;
  const zero = 0;
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(zero);
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const updateColumn = ({ target }) => {
    const { value } = target;
    setColumn(value);
  };

  const updateComparison = ({ target }) => {
    const { value } = target;
    setComparison(value);
  };

  const updateNumber = ({ target }) => {
    const { value } = target;
    const newNumber = Number(value);
    setNumber(newNumber);
  };

  const executeFilter = () => {
    setInputNumbers([
      ...inputNumbers,
      {
        column,
        comparison,
        number,
      },
    ]);
    setColumns(columns.filter((col) => col !== column));
  };

  const clearFilter = () => {
    setInputNumbers([]);
    setColumns('population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water');
    setComparison('maior que');
    setNumber(zero);
    setFilteredPlanets(data);
  };

  return (
    <div>
      <select
        onChange={ updateColumn }
        data-testid="column-filter"
        value={ column }
      >
        {columns.map((col) => <option key={ col } value={ col }>{ col }</option>)}
      </select>
      <select
        className="select-comparison"
        onChange={ updateComparison }
        data-testid="comparison-filter"
        value={ comparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ updateNumber }
        value={ number }
      />
      <div className="filter-button">
        <Button
          color="primary"
          type="button"
          data-testid="button-filter"
          onClick={ executeFilter }
        >
          Filtrar
        </Button>
      </div>

      <div>
        <label htmlFor="ascending">
          <input
            type="radio"
            id="ascending"
            name="sort_method"
            data-testid="column-sort-input-asc"
            value="ASC"
          // checked={  }
          // onChange={ (e) => }
          />
          Ascending
        </label>
        <label htmlFor="descending">
          <input
            type="radio"
            id="descending"
            name="sort_method"
            data-testid="column-sort-input-desc"
            value="DESC"
          // checked={  }
          // onChange={ (e) =>  }
          />
          Descending
        </label>
      </div>
      <div>
        <Button
          color="primary"
          type="button"
          data-testid="filter"
          onClick={ clearFilter }
        >
          X
        </Button>
      </div>

    </div>
  );
}

export default Header;
