import { Checkbox, Collapse, Layout, Menu, Typography } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import "./VideoPlayer.css";

const { Sider, Content } = Layout;
const { Title } = Typography;
const { Panel } = Collapse;

const VideoPlayer = ({ playlistID, userProgress }) => {
  const [state, setState] = useState({
    playlistData: {},
    menuCollapsed: 0,
    firstVideo: "",
    playlistArray: [],
  });

  const [currentVideo, setCurrentVideo] = useState(state.firstVideo);
  const [videoDescrption, setVideoDescription] = useState("");
  const [videoMargin, setVideoMargin] = useState(400);

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
        setState({
          ...state,
          playlistData: data,
          firstVideo: data.items[0].snippet.resourceId.videoId,
          playlistArray: data.items,
        });
        setCurrentVideo(state.firstVideo);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    state.playlistArray.map((item) => {
      if (item.snippet.resourceId.videoId === currentVideo) {
        console.log(item.snippet.description);
        setVideoDescription(item.snippet.description);
      }
    });
  }, [currentVideo]);

  /* Utility */
  const returnIframMarkup = () => {
    let videoURL = `https://www.youtube.com/embed/${
      currentVideo || state.firstVideo
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

  const getVideoDescriptionInMarkup = () => {
    state.playlistArray.map((item) => {
      if (item.snippet.resourceId.videoId === currentVideo) {
        console.log(item.snippet.description);
        setVideoDescription(item.snippet.description);
      }
    });
  };

  const handleVideoEnded = () => {
    var idx;
    state.playlistArray.forEach((item) => {
      if (item.snippet.resourceId.videoId === currentVideo) {
        idx = state.playlistArray.indexOf(item);
        console.log(idx);
      }
    });
    idx === -1
      ? setCurrentVideo(currentVideo)
      : setCurrentVideo(state.playlistArray[++idx].snippet.resourceId.videoId);
  };

  const handleVideoDuration = () => {};

  const handleMenuCollapse = (collapsed) => {
    setState({
      ...state,
      menuCollapsed: collapsed,
    });
    console.log(videoMargin);
    state.menuCollapsed ? setVideoMargin(400) : setVideoMargin(100);
  };

  const handleMenuItemClick = (videoId) => {
    setCurrentVideo(videoId);
  };

  return (
    <Layout>
      <Sider
        collapsible
        onCollapse={handleMenuCollapse}
        collapsed={state.menuCollapsed}
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
          defaultSelectedKeys={[currentVideo]}
          className="menu"
        >
          <Title level={4} className="playlist-title">
            Videos
          </Title>
          {/* <div className="menu-items"> */}
          {state.playlistArray.map((item) => (
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
          {/* </div> */}
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
