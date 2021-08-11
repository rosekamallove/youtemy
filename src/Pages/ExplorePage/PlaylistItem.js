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
import handleAddToBookamrk from "../../firestore/addBookmarks";
import handleAddCourse from "../../firestore/addCourse";
import { UserContext } from "../../UserContext";
import "./ExplorePage.css";

const { Meta } = Card;

const PlaylistItem = ({ key, playlistID, playlist }) => {
  const { uid } = useContext(UserContext);

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
            handleAddCourse(playlist.id.playlistId, uid);
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
