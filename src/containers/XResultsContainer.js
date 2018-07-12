import { connect } from "react-redux";
import { setVideo } from "../actions/XindexActions";

const mapStateToProps = reduxState => {
  return {
    videoId: reduxState.videoId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: videoId => dispatch(setVideo(videoId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(XSearchResults);
