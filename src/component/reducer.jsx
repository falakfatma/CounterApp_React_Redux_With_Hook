const initialCounterState = {
  count: 10,
};

export const reducerIncrement = (state = initialCounterState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { state: state.count + 1 };
    default:
      return state;
  }
};
const reducerDecrement = (state = initialCounterState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { state: state.count - 1 };
    default:
      return state;
  }
};
