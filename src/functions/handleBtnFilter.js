function handleBtnFilter(
  state,
  column,
  getValue,
  comparison,
) {
  const filteredPlanets = [];
  state.forEach((planet) => {
    const number = parseInt(planet[column], 10);
    const value = parseInt(getValue, 10);
    if (comparison === 'maior que') {
      if (number > value) filteredPlanets.push(planet);
    } else if (comparison === 'menor que') {
      if (number < value) filteredPlanets.push(planet);
    } else if (comparison === 'igual a') {
      if (number === value) {
        console.log(`${number} é igual a ${value}`);
        filteredPlanets.push(planet);
      }
    }
  });
  return filteredPlanets;
}

export default handleBtnFilter;
