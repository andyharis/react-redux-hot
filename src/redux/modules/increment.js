const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const initialState = {
  count: 0
};
export default function (state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return {count: state.count + 6};
    case DECREMENT:
      return {count: state.count - 2};
    default:
      return state;
  }
}

export function increment() {
  return {type: INCREMENT};
}

export function decrement() {
  return {type: DECREMENT};
}
