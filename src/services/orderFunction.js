const dataValidation = (param) => {
  const validation = param.match(/[1-9]/g);
  let element = null;

  if (validation) {
    element = Number(param);
  } else {
    element = param;
  }

  return element;
};

export default function orderFunction(data, setData, order) {
  if (data) {
    const { sort } = order;
    const numberOne = 1;
    const numberZero = 0;
    const arrPlanets = data.results;

    switch (sort) {
    case 'ASC':
      arrPlanets.sort((a, b) => {
        const elementA = dataValidation(a[order.column]);
        const elementB = dataValidation(b[order.column]);

        if (elementA > elementB) {
          return numberOne;
        }
        if (elementA < elementB) {
          return numberZero - numberOne;
        }
        // a must be equal to b
        return numberZero;
      });
      break;
    default:
      arrPlanets.sort((a, b) => {
        const elementA = dataValidation(a[order.column]);
        const elementB = dataValidation(b[order.column]);

        if (elementA < elementB) {
          return numberOne;
        }
        if (elementA > elementB) {
          return numberZero - numberOne;
        }
        // a must be equal to b
        return numberZero;
      });
    }

    setData({ ...data, results: arrPlanets });
  }
}
