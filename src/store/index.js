import { createStore } from "redux";

const initialState = {
  count: 5,
  x: 0
};

const reducer = (state = initialState, action) => {
  console.log("reducer berjalan", action);
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, { count: state.count + 1 });
    case "DECREMENT":
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
  //   return state;
};

const store = createStore(reducer);

export default store;
