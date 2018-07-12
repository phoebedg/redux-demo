import React from "react";

function XSearchResult({ handleClick, result }) {
  return (
    <li className="result-item" onClick={() => handleClick(result.id.videoId)}>
      <img
        className="result-img"
        src={result.snippet.thumbnails.default.url}
        height={result.snippet.thumbnails.default.height}
        width={result.snippet.thumbnails.default.width}
      />
      <div className="result-description">
        <div>
          <strong>{result.snippet.title}</strong>
        </div>
        {result.snippet.description}
      </div>
    </li>
  );
}

export default XSearchResult;
