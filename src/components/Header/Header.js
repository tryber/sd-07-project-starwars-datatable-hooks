import React, { useContext } from 'react';
import logo from '../../images/trybe-400x400.jpg';
import StarWarsContext from '../../context/StarWarsContext';
import './style.css';

const Header = () => {
  const { filters } = useContext(StarWarsContext);
  function renderTitle() {
    return <h1>StarWars Planets</h1>;
  }

  function renderBelovedLogo() {
    return (
      <h1>
        trybe
        <img className="trybe-logo" src={ logo } alt="beloved trybe logo" />
      </h1>
    );
  }

  function renderFilters() {
    const { filterByNumericValues } = filters;
    return (
      <div>
        <p>
          <strong>Active Filters</strong>
        </p>
        <p className="filters">
          {filterByNumericValues.map(({ column }, index) => (
            <button type="button" key={ `${index}btn` }>
              { `${column} X` }
            </button>
          ))}
        </p>
      </div>
    );
  }

  return (
    <div className="header">
      {renderBelovedLogo()}
      {renderTitle()}
      {renderFilters()}
    </div>
  );
};

export default Header;
