import { createContext } from 'react';

const StarWarsContext = createContext({
  data: [],
  setData: () => { },
  filters: {
    filterByName: {
      name: '',
    },
  },
  setFilters: () => { },
});

export default StarWarsContext;
