import {
  CaretRightOutlined,
  CopyOutlined,
  PlusCircleOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import "antd/dist/antd.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import getVideos from "../../apis/getVideos";
import { db } from "../../firebase";
import { UserContext } from "../../UserContext";
import "./ExplorePage.css";
const { Meta } = Card;

const PlaylistItem = ({ key, playlistID, playlist }) => {
  const { uid, setUid } = useContext(UserContext);
  const videos = [];

  const handleCourseButtonClicked = async (playlistID) => {
    const data = await getVideos(playlistID);
    let playlistInfo = {
      thumbnail: data.items[0].snippet.thumbnails.medium.url,
      title: data.items[0].snippet.title,
      playlistID,
    };
    data.items.forEach((item) => {
      videos.push({ videoId: item.id, watched: false });
    });
    db.collection("users")
      .doc(uid)
      .collection("currentlyEnrolled")
      .doc(playlistID)
      .set({ playlistInfo, videos });
  };

  const handleAddToBookamrk = async (playlistID) => {
    const data = await db.collection("users").doc(uid).get();
    let bookmarks = await data.data().bookmarks;
    bookmarks.push(playlistID);
    db.collection("users").doc(uid).set({ bookmarks }, { merge: true });
  };
  const yt = "https://youtube.com/playlist?list=" + playlistID;
  return (
    <Card
      style={({ width: 50 }, { padding: 0 }, { margin: 20 })}
      cover={
        <img
          src={playlist.snippet.thumbnails.default.url}
          alt={playlist.snippet.description}
        ></img>
      }
      actions={[
        <Link
          to={{
            pathname: "/video-player",
            playlistID,
          }}
        >
          <CaretRightOutlined key="Play" />
        </Link>,
        <PlusCircleOutlined
          key="Enroll"
          onClick={() => {
            handleCourseButtonClicked(playlist.id.playlistId);
          }}
        />,
        <a href={yt} target="_blank" rel="noreferrer">
          <YoutubeOutlined key="Open In Youtube" />
        </a>,
        <CopyOutlined
          onClick={() => {
            handleAddToBookamrk(playlist.id.playlistId);
          }}
        />,
      ]}
      bordered={true}
    >
      <Meta
        avatar={<Avatar src={playlist.snippet.thumbnails.default.url} />}
        title={playlist.snippet.title}
        description={playlist.snippet.channelTitle}
      />
    </Card>
  );
};
export default PlaylistItem;
