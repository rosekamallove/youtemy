import { db } from "../firebase";

const handleAddToBookamrk = async (playlistID, uid) => {
  const data = await db.collection("users").doc(uid).get();
  let bookmarks = await data.data().bookmarks;
  bookmarks.push(playlistID);
  db.collection("users").doc(uid).set({ bookmarks }, { merge: true });
};

export default handleAddToBookamrk;
