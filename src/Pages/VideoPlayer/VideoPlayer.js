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

  const [loading, setLoading] = useState(false);
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(playlistState.firstVideo);
  const [videoDescrption, setVideoDescription] = useState("");
  const [videoMargin, setVideoMargin] = useState(400);

  /*
   *  Use the useRef hook to store the referrence of checkBoxex
   *  currentVideo === videoId ? ref = {checkboxRef} : nothing
   *  oneVideoEnder => Update the ref to the next Menu.item,
   *  Update the Database
   */

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

    const fetchData = async () => (await fetch(url)).json();
    fetchData().then((data) => {
      console.log(data);
      setCurrentVideo(data.items[0].snippet.resourceId.videoId);
      setPlaylistState({
        playlistData: data,
        firstVideo: data.items[0].snippet.resourceId.videoId,
        playlistArray: data.items,
      });
      setLoading(true);
    });
  }, []);
  /*-------------------------------------------------------------------*/

  useEffect(() => {
    setVideoDescriptionInMarkup();
  }, [currentVideo]);

  useEffect(() => {
    setVideoDescriptionInMarkup();
  }, [loading]);

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
        playing={true}
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
      console.clear();
      console.log(currentVideo || playlistState.firstVideo);
      if (
        item.snippet.resourceId.videoId ===
        (currentVideo || playlistState.firstVideo)
      ) {
        setVideoDescription(item.snippet.description);
      }
    });
  };

  const handleVideoEnded = () => {
    var idx;
    playlistState.playlistArray.forEach((item) => {
      if (item.snippet.resourceId.videoId === currentVideo) {
        console.log(JSON.stringify(item.snippet.resourceId.videoId));
        idx = playlistState.playlistArray.indexOf(item);
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
          defaultSelectedKeys={[JSON.stringify(playlistState.firstVideo)]}
          className="menu"
        >
          <Title level={3} className="playlist-title">
            Videos
          </Title>
          {/* <div className="menu-items"> */}
          {playlistState.playlistArray.map((item) => (
            <Menu.Item
              key={JSON.stringify(item.snippet.resourceId.videoId)}
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
            style={{ padding: 24, textAlign: "center", minHeight: 820 }}
          >
            {returnIframMarkup()}
          </div>
          <Collapse bordered={false}>
            <Panel header="Description">
              <span className="description-span">{videoDescrption}</span>{" "}
            </Panel>
          </Collapse>
        </Content>
      </Layout>
    </Layout>
  );
};

export default VideoPlayer;
