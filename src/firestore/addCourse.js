import { message } from "antd";
import getVideos from "../apis/getVideos";
import { db } from "../firebase";

const videos = [];
const handleAddCourse = async (playlistID, uid) => {
  if (uid === "") {
    message.error("Not Logged In");
    return;
  }
  const data = await getVideos(playlistID);
  let playlistInfo = {
    thumbnail: data.items[0].snippet.thumbnails.medium.url,
    title: data.items[0].snippet.title,
    playlistID,
  };
  data.items.forEach((item) => {
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
