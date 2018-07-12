export function XResultsReducer(reduxState = "", action) {
  switch (action.type) {
    case "SET_VIDEO":
      return action.videoId;

    default:
      return reduxState;
  }
}
