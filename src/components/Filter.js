import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FilterPlanets() {
  const { setName } = useContext(MyContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setName(value);
  };

  return (
    <div>
      <label htmlFor="name-filter">
        Filtro de Planetas
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          placeholder="Digite o nome do planeta"
          /* onChange={(event) => setName(event.target.value)} */
          onChange={(event) => handleChange(event)}
        />
      </label>
      <label htmlFor="valor-numerico">
        Valores Numéricos
        <select
          data-testid="column-filter"
          name="valor-numerico"
          id="valor-numerico"
        >
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
        </select>
      </label>
      <label
        htmlFor="valor-numerico"
      >
        Filtro de Comparação
        <select
          data-testid="comparison-filter"
          name="comparison"
          id="comparison"
        >
          <option value="maior_que">maior que</option>
          <option value="menor_que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label
        htmlFor="valor_filtro"
      >
        Valor do filtro
        <input
          data-testid="value-filter"
          type="number"
          name="valor_filtro"
          id="valor_filtro"
          placeholder="Digite apenas numeros"
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
      >
        FILTRO
      </button>
    </div>
  );
}

export default FilterPlanets;
