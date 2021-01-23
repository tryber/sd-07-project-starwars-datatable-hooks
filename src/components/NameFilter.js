import React, { useContext } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function NameFilter() {
  const { setFilters } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    const nameInput = {
      name: target.value,
    };
    setFilters({ filterByName: nameInput });
  };

  return (
    <label htmlFor="name-input">
      Pesquisar por nome:
      <input
        data-testid="name-filter"
        id="name-input"
        type="text"
        onChange={ (event) => handleChange(event) }
      />
    </label>
  );
}
// 1. monitorar o input com um onChange e salvar no estado
// 2. Na table, colocar um IF
// 3. Se o estado for diferente de "", fazer um filter no data,
export default NameFilter;
