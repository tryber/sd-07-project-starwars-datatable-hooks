import { useState } from 'react';

function useFilter(data, title, collumn, condition, number, valueName) {
  const [filter, setFilter] = useState(false);

  const titles = title.filter((res) => res !== 'residents');

  const filterName = data
    .filter(({ name: nameFilter }) => nameFilter.includes(valueName));

  const filterNumber = data.filter((planet) => {
    switch (condition) {
    case '>':
      return Number(planet[collumn]) > Number(number);
    case '<':
      return Number(planet[collumn]) < Number(number);
    case '===':
      return Number(planet[collumn]) === Number(number);
    default:
      return data;
    }
  });

  const filtered = filter ? filterNumber : filterName;

  const handlerClick = () => {
    setFilter(!filter);
  };

  return [filtered, titles, handlerClick];
}

export default useFilter;
