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
    },
  );

  const [values, setValues] = useState({});

  const [filter, setFilter] = useState(false);

  const [option, setOption] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const titles = title.filter((res) => res !== 'residents');

  const handlerNameChange = ({ target }) => {
    const { value } = target;
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const { filterByName } = filters;

  const { name: names } = filterByName;

  const filterName = data.filter(
    ({ name: nameFilter }) => nameFilter.includes(names),
  );

  const handlerNumberChange = async ({ target }) => {
    const { name, value } = target;
    const objValues = { ...values };
    objValues[name] = value;
    setValues(objValues);
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
  };

  const { filterByNumericValues } = filters;

  const filtered = filter ? filterNumber : filterName;

  return [filtered, titles, option, names, filterByNumericValues,
    handlerNameChange, handlerNumberChange, handlerClick, removeFilter];
}

export default useEvent;
