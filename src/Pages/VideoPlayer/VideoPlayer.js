import React from "react";
import RenderWithoutTracking from "./RenderWithoutTracking";
import RenderWithTracking from "./RenderWithTracking";

const VideoPlayer = ({ location }) => {
  const playlistID = location.playlistID;
  const tracking = location.tracking;
  if (tracking) {
    return <RenderWithTracking playlistID={playlistID} />;
  } else {
    return <RenderWithoutTracking playlistID={playlistID} />;
  }
};

export default VideoPlayer;
