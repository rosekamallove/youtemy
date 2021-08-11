import React from "react";
import { Link } from "react-router-dom";
import "./ExplorePage.css";
import {
  CaretRightOutlined,
  PlusCircleOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import "antd/dist/antd.css";
const { Meta } = Card;

const PlaylistItem = ({ key, playlistID, playlist }) => {
  const handleCourseButtonClicked = (playlistID) => {
    console.log(playlistID);
  };
  const yt = "https://youtube.com/playlist?list=" + playlistID;
  return (
    <Card
            style={({ width:50}, { padding:0}, { margin:20})}
            cover={<img src={playlist.snippet.thumbnails.default.url} alt={playlist.snippet.description}></img>}
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
                  handleCourseButtonClicked(
                    "PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88"
                  );
                }}
              />,
              <a
                href={yt}
                target="_blank"
                rel="noreferrer"
              >
                <YoutubeOutlined key="Open In Youtube" />
              </a>,
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
