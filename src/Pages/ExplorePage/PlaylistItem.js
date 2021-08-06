import React from "react";
import { Link } from "react-router-dom";
import "./ExplorePage.css";

const PlaylistItem = ({ key, playlistID, playlist }) => {
  return (
    <div>
      <Link
        to={{
          pathname: "/video-player",
          playlistID,
        }}
      >
        <img
          className="ui image"
          src={playlist.snippet.thumbnails.default.url}
          alt={playlist.snippet.description}
        />
        <h4 className="header ">{playlist.snippet.title}</h4>
      </Link>
      <div className="channel-name">{playlist.snippet.channelTitle}</div>
      <br />
      <br />
    </div>
  );
};
export default PlaylistItem;
