export function XReceiveVideosReducer(reduxState = [], action) {
  switch (action.type) {
    case "RECEIVE_VIDEOS":
      return action.videos;

    default:
      return reduxState;
  }
}
