import React from 'react';
import logo from '../../images/trybe-400x400.jpg';
import './style.css'

const Header = () => {
  
  function renderTitle() {
    return (<h1>StarWars Planets</h1>);
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
    return (
      <div>
        <p>
          <strong>Active Filters</strong>
        </p>
        <p>
          <em>NONE</em>
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
