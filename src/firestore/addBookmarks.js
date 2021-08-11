import { db } from "../firebase";

const handleAddToBookamrk = async (
  playlistID,
  uid,
  title = "titleNotSpecified"
) => {
  const data = await db.collection("users").doc(uid).get();
  if (data) {
    let bookmarks = await data.data().bookmarks;
    if (!bookmarks) {
      bookmarks = [{ playlistID, title }];
      db.collection("users").doc(uid).set({ bookmarks }, { merge: true });
    } else {
      bookmarks.push({ playlistID, title });
      db.collection("users").doc(uid).set({ bookmarks }, { merge: true });
    }
  }
};

export default handleAddToBookamrk;
