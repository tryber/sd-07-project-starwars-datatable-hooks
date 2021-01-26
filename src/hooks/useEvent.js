import { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function useEvent() {
  const { data, title } = useContext(StarWarsContext);

  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: {
        collumn: 'name',
        sort: 'ASC',
      },
    },
  );

  const [values, setValues] = useState({});

  const [filter, setFilter] = useState(false);

  const [option, setOption] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const [sorted, setSorted] = useState([]);

  const titles = title.filter((res) => res !== 'residents');

  const handlerNameChange = ({ target }) => {
    const { value } = target;
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const { filterByName } = filters;

  const { name: names } = filterByName;

  const filterName = data.filter(({ name }) => name.includes(names));

  const handlerNumberChange = async ({ target }) => {
    const { name, value } = target;
    const objValues = { ...values };
    objValues[name] = value;
    setValues(objValues);
  };

  const handlerChangeSorted = ({ target }) => {
    const { name, value } = target;
    setFilters({
      ...filters,
      order: { ...filters.order, [name]: value },
    });
  };

  const { collumn, condition, number } = values;

  const filterNumber = data.filter(
    (fil) => fil.name.includes(names),
  ).filter((planet) => {
    switch (condition) {
    case 'maior que':
      return parseFloat(planet[collumn]) > parseFloat(number);
    case 'menor que':
      return parseFloat(planet[collumn]) < parseFloat(number);
    case 'igual a':
      return parseFloat(planet[collumn]) === parseFloat(number);
    default:
      return data;
    }
  });

  const handlerClick = () => {
    setFilter(true);
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, values],
    });

    const { filterByNumericValues } = filters;
    if (filterByNumericValues === undefined) {
      setOption(option);
    } else {
      setOption(option.filter((op) => op !== collumn));
    }
  };

  const removeFilter = ({ target }) => {
    const { value } = target;
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues.filter(
        ({ collumn: col }) => col !== value,
      ),
      ],
    });
    setOption([...option, value]);
    setFilter(false);
  };

  const handlerClickSorted = () => {
    setFilter(false);
    const zero = 0;
    const menosUm = -1;
    const { order } = filters;
    const { collumn: col, sort } = order;
    if (sort === 'ASC') {
      if (col === 'name') {
        setSorted(data.sort((a, b) => {
          if (a[col] > b[col]) return 1;
          if (a[col] < b[col]) return menosUm;
          return zero;
        }));
      } else {
        setSorted(data.sort((a, b) => a[col] - b[col]));
      }
    } else if (sort === 'DESC') {
      if (col === 'name') {
        setSorted(data.sort((a, b) => {
          if (a[col] < b[col]) return 1;
          if (a[col] > b[col]) return menosUm;
          return zero;
        }));
      } else {
        setSorted(data.sort((a, b) => b[col] - a[col]));
      }
    }
  };

  console.log(sorted);

  const filtered = filter ? filterNumber : filterName;

  const { filterByNumericValues } = filters;

  return [filtered, titles, option, names, filterByNumericValues,
    handlerNameChange, handlerNumberChange, handlerClick,
    removeFilter, handlerChangeSorted, handlerClickSorted];
}

export default useEvent;
