import { connect } from "react-redux";
import XPlayer from "../components/XPlayer";

const mapStateToProps = reduxState => {
  return {
    videoId: reduxState.videoId
  };
};

export default connect(
  mapStateToProps,
  null
)(XPlayer);
