/* const compare = (a, b) => {
  const populationA = (a) ? parseInt(a[filters.order.column], 10) : a;
  const populationB = (b) ? parseInt(b[filters.order.column], 10) : b;

  if (filters.order.sort === 'EQ') return zero;

  if (populationA < populationB) return filters.order.sort === 'ASC' ? one : oneLess;

  if (populationA > populationB) return filters.order.sort === 'ASC' ? oneLess : one;

  return zero;
}; */

// TBody
/* {planets
  .sort(compare)
  .filter((planet) => planet.name
    .toLowerCase()
    .includes(filters.filterByName.name.toLowerCase()))
  .map((planet) => (
    <TableLine planet={ planet } key={ planet.name } />
  ))} */

/*  .filter((planet) => planet.name.toLowerCase()
            .includes(filters.filterByName.name.toLowerCase())) */
