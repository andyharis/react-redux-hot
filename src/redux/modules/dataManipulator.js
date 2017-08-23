const FETCH_START = 'FETCH_START';
const FETCH_ERROR = 'FETCH_ERROR';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
import config from 'config';
const initialState = {
  result: [],
  loading: false,
  error: false,
  params: {}
};
export default function (state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_START:
      return {...state, loading: true};
    case FETCH_ERROR:
      return {...state, loading: false, error: action.error};
    case FETCH_SUCCESS:
      return {...state, loading: false, result: action.result};
    default:
      return state;
  }
}


export function fetchData(table, params = {}) {
  return {
    types: [FETCH_START, FETCH_SUCCESS, FETCH_ERROR],
    request: (api) => api.get(`${config.API.host}${table}`, {params})
  }
}