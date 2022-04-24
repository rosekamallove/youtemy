import { Checkbox, Collapse, Layout, Menu, message } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import ReactLinkify from "react-linkify";
import ReactPlayer from "react-player";
import getVideos from "../../apis/getVideos";
import "./VideoPlayer.css";

const { Sider, Content } = Layout;
const { Panel } = Collapse;

const RenderWithoutTracking = ({ playlistID }) => {
  playlistID = playlistID && localStorage.getItem("playlist-id");
  const [playlistState, setPlaylistState] = useState({
    playlistData: {},
    firstVideo: "",
    playlistArray: [],
  });

  const [loading, setLoading] = useState(true);
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(playlistState.firstVideo);
  const [videoDescription, setVideoDescription] = useState("");
  const [videoMargin, setVideoMargin] = useState(400);
  const selectedMenuItem = currentVideo;

  /**************************
   * Sets the PlaylistData *
   **************************/
  useEffect(() => {
    message.error("Your Progress Won't be saved");
    getVideos(playlistID).then((items) => {
      setCurrentVideo(items[0].snippet.resourceId.videoId);
      setPlaylistState({
        playlistData: items,
        firstVideo: items[0].snippet.resourceId.videoId,
        playlistArray: items,
      });
      setLoading(false);
    });
  }, [playlistID]);

  useEffect(() => {
    setVideoDescriptionInMarkup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentVideo]);

  useEffect(() => {
    setVideoDescriptionInMarkup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    playlistState.playlistArray.map((item) =>
      item.snippet.resourceId.videoId ===
      (currentVideo || playlistState.firstVideo)
        ? setVideoDescription(item.snippet.description)
        : ""
    );
  };

  const handleVideoEnded = () => {
    var idx;
    playlistState.playlistArray.forEach((item) => {
      if (item.snippet.resourceId.videoId === currentVideo) {
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

  const handleMenuItemClick = (videoId, e) => {
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
          height: "100%",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="light" mode="inline" selectedKeys={[selectedMenuItem]}>
          <Menu.Item key="9" style={{ paddingTop: 100, textAlign: "center" }}>
            <h2>Videos</h2>
          </Menu.Item>
          {playlistState.playlistArray.map((item) => (
            <Menu.Item
              key={item.snippet.resourceId.videoId}
              className="menu-item"
              onClick={(e) => {
                handleMenuItemClick(item.snippet.resourceId.videoId, e);
              }}
            >
              <Checkbox
                className="menu-checkbox"
                key={item.snippet.resourceId.videoId}
              ></Checkbox>
              {item.snippet.title}
            </Menu.Item>
          ))}
          <Menu.Item key="8" style={{ paddingBottom: 80 }}></Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: videoMargin }}>
        <Content style={{ margin: "50px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center", minHeight: 820 }}
          >
            {returnIframMarkup()}
          </div>
          <Collapse bordered={false} defaultActiveKey={["1"]}>
            <Panel header="Description" key="1">
              <ReactLinkify>
                <span className="description-span">{videoDescription}</span>{" "}
              </ReactLinkify>
            </Panel>
          </Collapse>
        </Content>
      </Layout>
    </Layout>
  );
};

export default RenderWithoutTracking;
