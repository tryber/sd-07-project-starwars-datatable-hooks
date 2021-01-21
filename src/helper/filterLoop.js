const filterLoop = (arrayFilters = [], arrayOrigin) => {
  let initArray = arrayOrigin;
  arrayFilters.forEach((elem) => {
    if (elem.comparison.includes('maior')) {
      initArray = initArray.filter(
        (planet) => Number(planet[elem.column]) > Number(elem.value),
      );
    } else if (elem.comparison.includes('menor')) {
      initArray = initArray.filter(
        (planet) => Number(planet[elem.column]) < Number(elem.value),
      );
    } else {
      initArray = initArray.filter(
        (planet) => Number(planet[elem.column]) === Number(elem.value),
      );
    }
  });

  return initArray;
};

export default filterLoop;
