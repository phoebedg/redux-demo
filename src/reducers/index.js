import { combineReducers } from "redux";
import { XResultsReducer } from "./XResultsReducer";
import { XSearchReducer } from "./XSearchReducer";
import { XReceiveVideosReducer } from "./XReceiveVideosReducer";

export default combineReducers({
  videos: XReceiveVideosReducer,
  videoId: XResultsReducer,
  input: XSearchReducer
});
