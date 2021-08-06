import axios from "axios";
const KEY = process.env.REACT_APP_YOUTUBE;

const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "playlist",
    maxResults: 15,
    key: KEY,
  },
});

export default instance;
