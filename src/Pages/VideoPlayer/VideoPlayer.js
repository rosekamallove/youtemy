import React, { useEffect } from "react";
import "./VideoPlayer.css";

export default function VideoPlayer({ playlistID, userProgress }) {
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
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return <div></div>;
}
