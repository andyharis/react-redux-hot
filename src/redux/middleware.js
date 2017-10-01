import axios from 'axios';
import Log from 'helpers/Output';

const api = axios;

const getErr = err => {
  const data = {
    message: err.message || "Something bad happened on server side!",
    body: err.response,
    request: err.request
  };
  Log({title: 'Error on API', table: data});
  return data;
}
const middleware = store => next => action => {
  if (typeof action === 'function')
    return action(store.dispatch, store.getState, api);
  const {request, types, ...rest} = action;
  if (!request)
    return Promise.resolve(next(action));
  const [REQUEST, SUCCESS, FAILURE] = types;
  next({...rest, type: REQUEST});
  const promise = request(api, store.dispatch, store.getState);
  setTimeout(() => {
    promise
      .then(
        (result) => next({...rest, result: result.data, type: SUCCESS}),
        (error) => next({...rest, error: getErr(error), type: FAILURE})
      )
      .catch((error) => next({...rest, error: getErr(error), type: FAILURE}));
  }, 500);
  return promise;
};
export default middleware;