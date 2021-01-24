import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import './Header.css';

function Header() {
  const { setSearchByName,
    setSearchFilterColumn,
    setSearchFilterComparison,
    setSearchFilterValue,
    filterBySetValues,
    columnFilter,
    comparisonFilter } = useContext(StarWarsContext);

  return (
    <header className="header">
      <div>
        <img
          className="logo"
          src="https://i.ebayimg.com/images/g/WS0AAOSwqwxeJHFs/s-l400.jpg"
          alt="logo-starwars"
        />
      </div>
      <div className="input-container">
        <div>
          <input
            className="input-name"
            type="text"
            name="name"
            id="name"
            data-testid="name-filter"
            onChange={ (e) => setSearchByName(e.target.value) }
            placeholder="Search By Name"
          />
        </div>
        <div>
          <fieldset className="fieldset">
            <legend className="legend">Search by Numeric Number</legend>
            <select
              className="input-column"
              data-testid="column-filter"
              name="column"
              id="column"
              onChange={ (e) => setSearchFilterColumn(e.target.value) }
            >
              { columnFilter.map((option) => (
                <option key={ option } value={ option }>{option}</option>
              ))}
            </select>
            <select
              className="input-comparison"
              data-testid="comparison-filter"
              name="comparison"
              id="comparison"
              onChange={ (e) => setSearchFilterComparison(e.target.value) }
            >
              { comparisonFilter.map((option) => (
                <option key={ option } value={ option }>{option}</option>
              ))}
            </select>
            <input
              className="input-number"
              type="number"
              name="number"
              id="number"
              data-testid="value-filter"
              onChange={ (e) => setSearchFilterValue(e.target.value) }
              placeholder="value"
            />
            <button
              className="filter-button"
              type="button"
              data-testid="button-filter"
              onClick={ filterBySetValues }
            >
              Filter
            </button>
          </fieldset>
        </div>
      </div>
    </header>
  );
}

export default Header;
