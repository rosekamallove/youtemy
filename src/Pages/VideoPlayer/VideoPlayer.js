import { Checkbox, Collapse, Layout, Menu, Typography } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import "./VideoPlayer.css";

const { Sider, Content } = Layout;
const { Title } = Typography;
const { Panel } = Collapse;

const VideoPlayer = (props) => {
  var playlistID = props.location.playlistID;
  const [playlistState, setPlaylistState] = useState({
    playlistData: {},
    firstVideo: "",
    playlistArray: [],
  });

  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(playlistState.firstVideo);
  const [videoDescrption, setVideoDescription] = useState("");
  const [videoMargin, setVideoMargin] = useState(400);

  /**************************
   * Sets the PlaylistData *
   **************************/
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
      maxResults: 100,
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
        setPlaylistState({
          ...playlistState,
          playlistData: data,
          firstVideo: data.items[0].snippet.resourceId.videoId,
          playlistArray: data.items,
        });
        setCurrentVideo(playlistState.firstVideo);
      })
      .catch((err) => console.log(err));
    setVideoDescriptionInMarkup();
  }, []);

  useEffect(() => {
    setVideoDescriptionInMarkup();
  }, [currentVideo]);

  /**************************
   *    Utility Functions   *
   **************************/

  /* Returns the React Player on Current Video Change */
  const returnIframMarkup = () => {
    let videoURL = `https://www.youtube.com/embed/${
      currentVideo || playlistState.firstVideo
    }`;
    return (
      <ReactPlayer
        controls={true}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        url={videoURL}
        className="react-player"
        width="auto%"
        height={700}
        onEnded={handleVideoEnded}
        onDuration={handleVideoDuration}
      ></ReactPlayer>
    );
  };

  const setVideoDescriptionInMarkup = () => {
    playlistState.playlistArray.map((item) => {
      if (item.snippet.resourceId.videoId === currentVideo)
        setVideoDescription(item.snippet.description);
    });
  };

  const handleVideoEnded = () => {
    var idx;
    playlistState.playlistArray.forEach((item) => {
      if (item.snippet.resourceId.videoId === currentVideo) {
        console.log(typeof item.snippet.resourceId.videoId);
        idx = playlistState.playlistArray.indexOf(item);
        console.log(idx);
      }
    });
    idx === -1
      ? setCurrentVideo(currentVideo)
      : setCurrentVideo(
          playlistState.playlistArray[++idx].snippet.resourceId.videoId
        );
  };

  const handleVideoDuration = () => {};

  const handleMenuCollapse = (collapsed) => {
    setMenuCollapsed(collapsed);
    menuCollapsed ? setVideoMargin(400) : setVideoMargin(120);
  };

  const handleMenuItemClick = (videoId) => {
    setCurrentVideo(videoId);
  };

  return (
    <Layout>
      <Sider
        collapsible
        onCollapse={handleMenuCollapse}
        collapsed={menuCollapsed}
        width={400}
        collapsedWidth={65}
        style={{
          overflow: "auto",
          height: "88vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[playlistState.firstVideo]}
          className="menu"
        >
          <Title level={3} className="playlist-title">
            Videos
          </Title>
          {/* <div className="menu-items"> */}
          {playlistState.playlistArray.map((item) => (
            <Menu.Item
              key={item.snippet.resourceId.videoId}
              className="menu-item"
              onClick={() => {
                handleMenuItemClick(item.snippet.resourceId.videoId);
              }}
            >
              <Checkbox className="menu-checkbox"></Checkbox>
              {item.snippet.title}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: videoMargin }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center", minHeight: 800 }}
          >
            {returnIframMarkup()}
          </div>
          <Collapse bordered={false}>
            <Panel header="Description">{videoDescrption}</Panel>
          </Collapse>
        </Content>
      </Layout>
    </Layout>
  );
};

export default VideoPlayer;
