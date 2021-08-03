import { Layout, Menu, Typography } from "antd";
import "antd/dist/antd.css";
import Checkbox from "antd/lib/checkbox/Checkbox";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const VideoPlayer = ({ playlistID, userProgress }) => {
  const [state, setState] = useState({
    menuCollapsed: 0,
    firstVideo: "",
    currentVideo: "",
    playlistArray: [],
  });

  useEffect(() => {
    const API_KEY = "AIzaSyBR3F9lodP7zQ3wiY3FY0dHS_8edP5j6NM";
    playlistID =
      playlistID === undefined
        ? "PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP"
        : playlistID;
    const _URL = "https://www.googleapis.com/youtube/v3/playlistItems";

    const options = {
      part: "snippet",
      key: API_KEY,
      maxResults: 20,
      playlistId: playlistID,
    };

    var url = new URL(_URL),
      params = options;
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setState({
          ...state,
          firstVideo: data.items[0].snippet.resourceId.videoId,
          playlistArray: data.items,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  /* Utility */
  const returnIframMarkup = (videoId) => {
    let videoURL = `https://www.youtube.com/embed/${videoId}`;
    return (
      <ReactPlayer
        url={videoURL}
        className="react-player"
        width="100%"
        height="80%"
      ></ReactPlayer>
    );
  };
  const handleMenuCollapse = (collapsed) => {
    setState({
      ...state,
      menuCollapsed: collapsed,
    });
  };

  const handleMenuItemClick = (videoId) => {
    returnIframMarkup(videoId);
  };

  return (
    <div>
      <Layout>
        <Sider
          collapsible
          onCollapse={handleMenuCollapse}
          collapsed={state.menuCollapsed}
          width={400}
          collapsedWidth={150}
        >
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            className="menu"
          >
            <Title level={4} className="playlist-title">
              Videos
            </Title>
            {state.playlistArray.map((item) => (
              <Menu.Item
                key={item.snippet.resourceId.videoId}
                className="menu-item"
                onClick={handleMenuItemClick(item.snippet.resourceId.videoId)}
              >
                <Checkbox className="menu-checkbox"></Checkbox>
                {item.snippet.title}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {returnIframMarkup(state.currentVideo || state.firstVideo)}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default VideoPlayer;
