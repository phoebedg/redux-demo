export function searchReducer(reduxState = "", action) {
  switch (action.type) {
    case "SET_INPUT":
      return action.input;

    default:
      return reduxState;
  }
}
