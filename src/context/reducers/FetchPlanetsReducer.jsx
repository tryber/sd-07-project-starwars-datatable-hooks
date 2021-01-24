export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const GET_PLANETS = 'GET_PLANETS';

export function FetchPlanetsReducer(state, action) {
  switch (action.type) {
  case REQUEST_PLANETS:
    return { ...state, loading: true };
  case GET_PLANETS:
    return { ...state, planets: action.payload, loading: false };
  default:
    return state;
  }
}
