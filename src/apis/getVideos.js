const getVideos = async (playlistID) => {
  const API_KEY = process.env.REACT_APP_YOUTUBE;
  const _URL = "https://www.googleapis.com/youtube/v3/playlistItems";
  const options = {
    part: "snippet",
    key: API_KEY,
    maxResults: 100,
    playlistId: playlistID,
  };
  var url = new URL(_URL),
    params = options;
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  return await (await fetch(url)).json();
};

export default getVideos;
