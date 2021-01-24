const FILTER_NAME = 'FILTER_NAME';
const FILTER_COLUMN = 'FILTER_COLUMN';
const FILTER_REMOVE = 'FILTER_REMOVE';
function FilterReducert(state, action) {
  switch (action.type) {
  case FILTER_NAME:
    return { ...state, filterByName: { name: action.payload } };
  case FILTER_COLUMN:
    return {
      ...state,
      filterByNumericValues: [...state.filterByNumericValues
        .filter(({ column }) => column !== action.payload.column),
      action.payload],
    };
  case FILTER_REMOVE:
    return {
      ...state,
      filterByNumericValues: [...state.filterByNumericValues
        .filter(({ column }) => column !== action.payload)],
    };
  default:
    return state;
  }
}

export { FILTER_NAME, FILTER_COLUMN, FILTER_REMOVE, FilterReducert };
