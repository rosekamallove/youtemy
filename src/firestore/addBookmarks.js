import { message } from "antd";
import { db } from "../firebase";

const handleAddToBookamrk = async (
  playlistID,
  uid,
  title = "Untitled",
  thumbnail = "https://i.stack.imgur.com/y9DpT.jpg"
) => {
  if (uid === "") {
    message.error("Not Logged In");
    return;
  }
  const data = await db.collection("users").doc(uid).get();
  if (data) {
    let bookmarks = await data.data().bookmarks;
    if (!bookmarks) {
      bookmarks = [{ playlistID, title, thumbnail }];
      db.collection("users").doc(uid).set({ bookmarks }, { merge: true });
    } else {
      const existingBookmark = bookmarks.find(
        (bookmark) => bookmark.playlistID === playlistID
      );
      if (existingBookmark) {
        message.info(`Course already added to Bookmarks`);
      } else {
        bookmarks.push({ playlistID, title, thumbnail });
        db.collection("users").doc(uid).set({ bookmarks }, { merge: true });
        message.info(`Course added to Bookmarks check it out`);
      }
    }
  }
};

export default handleAddToBookamrk;
