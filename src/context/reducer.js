function reducer(state, action) {
  switch (action.type) {
  case 'FILTER_BY_NAME':
    return {
      ...state,
      ...state.filters,
      filterByName: {
        name: action.payload,
      },
    };
  case 'FILTER_BY_COLUMN':
    return {
      ...state,
      ...state.filters,
      filterByNumericValues: action.payload,
    };
  default:
    return state;
  }
}

export default reducer;

/*
filters = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [
    {
      column: 'population',
      comparison: 'maior que',
      value: '100000',
    },
  ],
}
*/
