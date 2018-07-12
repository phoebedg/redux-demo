import { connect } from "react-redux";
import { setVideo } from "../actions/XindexActions";
import XSearchResults from "../components/XSearchResults";

const mapStateToProps = reduxState => {
  return {
    videos: reduxState.videos
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
