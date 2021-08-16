const API_KEY = process.env.REACT_APP_YOUTUBE;
const _URL = "https://www.googleapis.com/youtube/v3/playlistItems";

var result = [];
var nextPageToken;

const getVideos = async (playlistID) => {
  const options = {
    part: "snippet",
    key: API_KEY,
    maxResults: 500,
    playlistId: playlistID,
  };
  const url = getFetchUrl(options);

  let data = await (await fetch(url)).json();
  const totalVideos = await data.pageInfo.totalResults;
  result = data.items;
  nextPageToken = data.nextPageToken;

  while (true) {
    if (result.length === totalVideos) {
      break;
    }
    const returnedArr = await getMoreVideos(options, nextPageToken);
    if (returnedArr.length === result.length) {
      break;
    } else {
      result = returnedArr;
    }
  }
  return result;
};

const getMoreVideos = async (options, pageToken) => {
  const newOptions = { ...options, pageToken };
  const url = getFetchUrl(newOptions);
  const data = await (await fetch(url)).json();
  nextPageToken = data.nextPageToken;
  return [...result, ...data.items];
};

const getFetchUrl = (options) => {
  var url = new URL(_URL),
    params = options;
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  return url;
};

export default getVideos;
