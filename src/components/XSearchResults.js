import React from "react";
import XSearchResult from "./XSearchResult";

class XSearchResults extends React.Component {
  render() {
    const { videos, handleClick } = this.props;
    return (
      <div>
        <ul className="results-list">
          {videos.items.map(video => {
            return (
              <XSearchResult
                onClick={() => handleClick(video.id.videoId)}
                result={video}
                key={video.id.videoId}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default XSearchResults;
