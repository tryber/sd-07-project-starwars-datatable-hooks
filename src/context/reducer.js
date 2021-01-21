const reducer = (state, action) => {
  switch (action.type) {
  case 'SEARCH_NAME':
    return {
      ...state,
      filters: {
        ...state.filters,
        filterByName: {
          name: action.name,
        },
      },
    };

  case 'SET_DATA':
    return {
      ...state,
      data: [...action.data],
    };
  default:
    return state;
  }
};

export default reducer;
