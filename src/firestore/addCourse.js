import { message } from "antd";
import getVideos from "../apis/getVideos";
import { db } from "../firebase";

const videos = [];
const handleAddCourse = async (playlistID, uid) => {
  if (uid === "") {
    message.error("Not Logged In");
    return;
  }
  console.log(uid);
  const data = await getVideos(playlistID);
  console.log(data);
  let playlistInfo = {
    thumbnail: data.items[0].snippet.thumbnails.medium.url,
    title: data.items[0].snippet.title,
    playlistID,
  };
  data.items.forEach((item) => {
    console.log(item);
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
    .set({ playlistInfo, videos });
  message.info("Course added Succesfuly");
};

export default handleAddCourse;
