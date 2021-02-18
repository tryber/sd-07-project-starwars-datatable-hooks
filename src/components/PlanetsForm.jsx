import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsForm() {
  const { setName } = useContext(StarWarsContext);

  // const [name1, setName] = useState('');
  return (
    <form>
      <label htmlFor="name-filter">
        Filtrar por nome
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ (event) => setName(event.target.value) }
        />
      </label>
      <label htmlFor="collumn">
        Selecione sua coluna
        <select name="collumn" id="collumn" data-testid="column-filter">
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="value-range">
        Faixa de Valor
        <select name="collumn" id="value-range" data-testid="comparison-filter">
          <option value="maiorQue">maior que</option>
          <option value="rotation_period">menor que</option>
          <option value="surface_water">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Valor
        <input id="value-filter" type="number" />
      </label>
      <button type="button" data-testid="button-filter">Filtrar</button>
    </form>
  );
}

export default PlanetsForm;
