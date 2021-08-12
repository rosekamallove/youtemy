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

  const tracking = location.tracking;
  if (tracking) {
    return <RenderWithTracking playlistID={playlistID} />;
  } else {
    return <RenderWithoutTracking playlistID={playlistID} />;
  }
};

export default VideoPlayer;
