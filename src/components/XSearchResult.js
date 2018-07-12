import React from "react";

function XSearchResult() {
  return (
    <li
      className="result-item"
      onClick={event => {
        this.props.playVideo(videoId);
      }}
    >
      <img className="result-img" src={url} height={height} width={width} />
      <div className="result-description">
        <div>
          <strong>{title}</strong>
        </div>
        {description}
      </div>
    </li>
  );
}

export default XSearchResult;
