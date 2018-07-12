export function setInput(input) {
  return {
    type: "SET_INPUT",
    input
  };
}

export function receiveVideos(result) {
  return {
    type: "RECEIVE_VIDEOS",
    videos: result.items
  };
}

export function fetchVideos(input) {
  const KEY = "AIzaSyDmT5UdKhNCTTcYIgtNI3iXUStYIi4yQpg";
  return function(dispatch) {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${input}&part=snippet&type=video&key=${KEY}`
    )
      .then(response => response.json())
      .then(result => {
        dispatch(receiveVideos(result));
        dispatch(setInput(""));
      })
      .catch(function(error) {
        console.log("something went wrong");
      });
  };
}

export function setVideo(videoId) {
  return {
    type: "SET_VIDEO",
    videoId
  };
}
