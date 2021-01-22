const sortPlanet = (initArray = [], params) => {
  const ascend = 1;
  const descend = -1;
  const ZERO = 0;
  const orderList = params.sort === 'ASC' ? ascend : descend;

  const checkNumber = params.column === 'orbital_period';

  const numArray = initArray;
  const stringArray = initArray;

  if (checkNumber) {
    const ordenedArrayNumber = numArray.sort((a, b) => {
      if (Number(a[params.column]) > Number(b[params.column])) {
        return orderList;
      }
      if (Number(a[params.column]) < Number(b[params.column])) {
        return -orderList;
      }
      return ZERO;
    });

    return ordenedArrayNumber;
  }

  const ordenedArray = stringArray.sort((a, b) => {
    if (a[params.column] > b[params.column]) {
      return orderList;
    }
    if (a[params.column] < b[params.column]) {
      return -orderList;
    }
    return ZERO;
  });

  return ordenedArray;
};

export default sortPlanet;
