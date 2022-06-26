import { message } from "antd";
import firebase, { db } from "../firebase";

const handleUpdateCourse = async (playListId, uid, newVideos) => {
  const videos = [];
  if (uid === "") {
    message.error("Not Logged In");
    return;
  }

  newVideos.forEach((item) => {
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
    .doc(playListId)
    .update({
      videos: firebase.firestore.FieldValue.arrayUnion(...videos),
    });
  message.info("Update course successfully");
};

export default handleUpdateCourse;
