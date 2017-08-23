const TEMP_LOAD = 'TEMP_LOAD';
const TEMP_SAVE = 'TEMP_SAVE';
const TEMP_REPLACE = 'TEMP_REPLACE';

const initialState = {
  local: [],
  server: [],
  index: 0,
  loading: true
};
export default function (state = initialState, action = {}) {
  switch (action.type) {
    case TEMP_LOAD:
      return {
        ...state,
        loading: false,
        local: [...state.local, action.result.local],
        server: [...state.server, action.result.server],
        index: action.result.index
      };
    default:
      return state;
  }
}


export function loadTemp(local = {}, server = {}, index = 0) {
  return {type: TEMP_LOAD, result: {local, server, index}};
}

export function getCurrentData() {
  return (dispatch, state) => {
    const store = state().tempData;
    const {local, server, index} = store;
    return {local: local[index], server: server[index]};
  }
}

export function saveTemp(localChain, serverChain, localData, serverData) {
  return (dispatch, getState) => {
    const {local, server} = dispatch(getCurrentData());
    console.info(local, server);
  }
}