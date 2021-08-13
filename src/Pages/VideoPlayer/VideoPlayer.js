import React from "react";
import RenderWithoutTracking from "./RenderWithoutTracking";
import RenderWithTracking from "./RenderWithTracking";

const VideoPlayer = ({ location }) => {
  let playlistID = location.playlistID;
  if (playlistID === undefined) {
    playlistID = localStorage.getItem("playlist-id");
  } else {
    localStorage.setItem("playlist-id", playlistID);
  }

  let tracking = location.tracking;
  if (tracking === undefined) {
    tracking = localStorage.getItem("tracking");
  } else {
    localStorage.setItem("tracking", tracking);
  }

  if (tracking) {
    return <RenderWithTracking playlistID={playlistID} />;
  } else {
    return <RenderWithoutTracking playlistID={playlistID} />;
  }
};

export default VideoPlayer;
