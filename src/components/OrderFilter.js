import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function OrderFilter() {
  const {
    setSortOrder,
    // filteredPlanets,
    setSortColumn,
    // sortOrder,
    // sortColumn,
  } = useContext(StarWarsContext);

  // const [ordernation, setOrdernation] = useState('ASC');
  // const [orderSelected, setOrderSelected] = useState('name');

  const infos = [
    'name',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
    'climate',
    'gravity',
    'terrain',
    'films',
    'created',
    'edited',
    'url',
  ];

  // console.log(sortOrder, sortColumn);

  // const zero = 0;
  // const minusOne = -1;
  // let orderingPlanets = [];
  // const toSortArr = [...filteredPlanets];

  // switch (sort) {
  // case 'ASC':
  //   orderingPlanets = toSortArr.sort((a, b) => Number(a[column]) - Number(b[column]));
  //   break;
  // case 'DESC':
  //   orderingPlanets = toSortArr.sort((a, b) => Number(b[column]) - Number(a[column]));
  //   break;
  // default:
  //   orderingPlanets = toSortArr.sort((a, b) => {
  //     if (a.name > b.name) {
  //       return 1;
  //     }
  //     if (a.name < b.name) {
  //       return minusOne;
  //     }
  //     return zero;
  //   });
  // }

  const clickHandle = () => {
    console.log('cliquei');
  };

  const handleChangeSort = ({ target }) => {
    setSortOrder(target.value);
  };

  const gettingSortColumn = ({ target }) => {
    setSortColumn(target.value);
  };

  return (
    <div>
      <label htmlFor="order">
        <span>Ordene por:</span>
        <select
          id="order"
          data-testid="column-sort"
          onChange={ gettingSortColumn }
        >
          {infos.map((info) => (
            <option key={ info }>{info}</option>
          ))}
        </select>
      </label>
      <label htmlFor="asc">
        <span>ASC</span>
        <input
          onChange={ handleChangeSort }
          value="ASC"
          id="asc"
          name="radio"
          type="radio"
          data-testid="column-sort-input-asc"
        />
      </label>
      <label htmlFor="desc">
        <span>DESC</span>
        <input
          onChange={ handleChangeSort }
          id="desc"
          value="DESC"
          name="radio"
          type="radio"
          data-testid="column-sort-input-desc"
        />
      </label>
      <button
        onClick={ clickHandle }
        data-testid="column-sort-button"
        type="button"
      >
        Ordenar
      </button>
    </div>
  );
}

export default OrderFilter;
