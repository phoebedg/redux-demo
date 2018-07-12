import { connect } from "react-redux";
import XSearchBar from "../components/XSearchBar";
import Search from "../components/Search";
import { fetchVideos, setInput } from "../actions/XindexActions";

// class XSearchContainer extends React.Component {
//   render(){
//     return (
//       <XSearchBar />
//     );
//   }
// }

const mapStateToProps = reduxState => {
  return {
    input: reduxState.input
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: input => dispatch(setInput(input)),
    handleSubmit: (event, input) => {
      event.preventDefault();
      dispatch(fetchVideos(input));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(XSearchBar);
