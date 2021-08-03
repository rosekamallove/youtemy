import React, { useEffect, useState } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ playlistID, userProgress }) => {
  const [playlist, setPlaylist] = useState({
    firstVideo: "",
    playlistArray: [],
  });
  useEffect(() => {
    const API_KEY = "AIzaSyBR3F9lodP7zQ3wiY3FY0dHS_8edP5j6NM";
    playlistID =
      playlistID === undefined
        ? "PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP"
        : playlistID;
    const _URL = "https://www.googleapis.com/youtube/v3/playlistItems";

    const options = {
      part: "snippet",
      key: API_KEY,
      maxResults: 20,
      playlistId: playlistID,
    };

    var url = new URL(_URL),
      params = options;
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPlaylist({
          firstVideo: data.items[0].snippet.resourceId.videoId,
          playlistArray: data.items,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {playlist.playlistArray.map((item) => (
        <article className="item" data-key={item.snippet.resourceId.videoId}>
          <img
            src={item.snippet.thumbnails.medium.url}
            alt=""
            className="thumb"
          />
          <div className="details">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.description.substring(0, 100)}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default VideoPlayer;
