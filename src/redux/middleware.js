import axios from 'axios';

const api = axios;
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
        (error) => next({...rest, error, type: FAILURE})
      )
      .catch((error) => next({...rest, error, type: FAILURE}));
  }, 1500);
  return promise;
};
export default middleware;