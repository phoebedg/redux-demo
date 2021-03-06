import React from "react";
import XPlayerContainer from "../containers/XPlayerContainer";
// import Search from "./Search";
import XSearchContainer from "../containers/XSearchContainer";
import XResultsContainer from "../containers/XResultsContainer";

class App extends React.Component {
  constructor() {
    super();

    // this.state = {
    //   videoId: "xsSnOQynTHs"
    // };

    // this.playVideo = this.playVideo.bind(this);
  }

  // playVideo(videoId) {
  //   this.setState({
  //     videoId: videoId
  //   });
  // }

  render() {
    return (
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <XPlayerContainer />
        </div>
        <div>
          <XSearchContainer />
        </div>
        <div>
          <XResultsContainer />
        </div>
        {/* <div className="col-6 offset-3 d-flex justify-content-center">
          <Search playVideo={this.playVideo} />
        </div> */}
      </div>
    );
  }
}

export default App;
