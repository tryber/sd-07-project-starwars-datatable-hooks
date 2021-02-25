import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Header = () => {
  const { data } = React.useContext(StarWarsContext);

  return (
    <div>
      <h1>{ data ? 'Star Wars' : 'Erro'}</h1>
    </div>
  );
};

export default Header;
