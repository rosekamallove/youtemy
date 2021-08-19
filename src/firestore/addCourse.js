import { message } from "antd";
import getVideos from "../apis/getVideos";
import { db } from "../firebase";

const videos = [];
const handleAddCourse = async (playlistID, uid) => {
  if (uid === "") {
    message.error("Not Logged In");
    return;
  }
  const items = await getVideos(playlistID);
  let playlistInfo = {
    thumbnail: items[0].snippet.thumbnails.medium.url,
    title: items[0].snippet.title,
    playlistID,
  };
  items.forEach((item) => {
    videos.push({
      videoId: item.snippet.resourceId.videoId,
      watched: false,
      title: item.snippet.title,
      description: item.snippet.description,
    });
  });
  db.collection("users")
    .doc(uid)
    .collection("currentlyEnrolled")
    .doc(playlistID)
    .set({ playlistInfo, videos, totalWatched: 0 });
  message.info("Course added Succesfuly");
};

export default handleAddCourse;
