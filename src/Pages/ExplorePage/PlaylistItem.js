import {
  CaretRightOutlined,
  CopyOutlined,
  PlusCircleOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Popconfirm, Popover } from "antd";
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
      style={({ width:50}, { padding: 0 }, { margin: 20 })}
      actions={[
        <Popover content="Preview in the Player">
          <Link
            to={{
              pathname: "/video-player",
              playlistID,
              tracking: false,
            }}
          >
            <CaretRightOutlined key="Play" />
          </Link>
        </Popover>,
        <Popover content="Enroll Course">
          <Popconfirm
            title="You shouldn't learn two things at once, adding to bookmarks is better, still wanna continue"
            onConfirm={() => {
              handleAddCourse(playlist.id.playlistId, uid);
            }}
          >
            <PlusCircleOutlined key="Enroll" />
          </Popconfirm>
        </Popover>,
        <Popover content="Open in YouTube, support them!">
          <a href={yt} target="_blank" rel="noreferrer">
            <YoutubeOutlined key="Open In Youtube" />
          </a>
        </Popover>,
        <Popover content="Add to bookmark">
          <CopyOutlined
            onClick={() => {
              handleAddToBookamrk(
                playlist.id.playlistId,
                uid,
                playlist.snippet.title,
                playlist.snippet.thumbnails.high.url
              );
            }}
          />
        </Popover>,
      ]}
      bordered={true}
    >
      <Meta
        avatar={<Avatar src={playlist.snippet.thumbnails.default.url} />}
        title={playlist.snippet.title}
        description={playlist.snippet.description}
      />
    </Card>
  );
};
export default PlaylistItem;
