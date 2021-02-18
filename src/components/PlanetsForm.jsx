import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function PlanetsForm() {
  const { setName } = useContext(StarWarsContext);

  // const [name1, setName] = useState('');
  return (
    <div>
      <label htmlFor="name-filter">
        Filtrar por nome
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          onChange={ (event) => setName(event.target.value) }
        />
      </label>
    </div>
  );
}

export default PlanetsForm;
