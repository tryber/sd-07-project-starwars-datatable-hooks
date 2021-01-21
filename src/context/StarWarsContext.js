import { createContext } from 'react';

export const data = {
  filters: {
    filterByName: {
      name: "",
    },
    filterByNumericValues: [
      {
        column: "population",
        comparison: "maior que",
        value: "100000",
      }, //deve ser possível inserção de mais filtros numericos
    ],
    order: {
      column: "Name",
      sort: "ASC",
    },
  },
};

const StarWarsContext = createContext(null);

export default StarWarsContext;
