import { Checkbox, Collapse, Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { useCallback, useContext, useEffect, useState } from "react";
import ReactLinkify from "react-linkify";
import ReactPlayer from "react-player";
import getVideos from "../../apis/getVideos";
import { db } from "../../firebase";
import handleUpdateCourse from "../../firestore/updateCourse";
import { UserContext } from "../../UserContext";
import "./VideoPlayer.css";

const { Sider, Content } = Layout;
const { Panel } = Collapse;

const RenderWithTracking = ({ playlistID }) => {
  const [playlistData, setPlaylistData] = useState(null);

  let { uid } = useContext(UserContext);
  if (uid === "") {
    uid = localStorage.getItem("user-id-youtemy");
  } else {
    localStorage.setItem("user-id-youtemy", uid);
  }

  const [currentVideo, setCurrentVideo] = useState();
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [videoDescription, setVideoDescription] = useState("");
  const [videoMargin, setVideoMargin] = useState(400);
  const selectedMenuItem = currentVideo;

  const getDataCB = useCallback(async () => {
    const data = await db
      .collection("users")
      .doc(uid)
      .collection("currentlyEnrolled")
      .doc(playlistID)
      .get();
    setPlaylistData(data.data());
    setFirstUnwatchedVideo(data.data());
    setVideoDescription(data.data().videos[0].description);
  }, [playlistID, uid]);

  const syncPlayList = useCallback(async () => {
    const youtubePlayList = await getVideos(playlistID);

    if (youtubePlayList.length > playlistData.videos.length) {
      // new videos are added to the playlist by creator
      const newVideos = youtubePlayList.slice(playlistData.videos.length);
      handleUpdateCourse(playlistID, uid, newVideos);

      // update dom
      getDataCB();
    }
  }, [getDataCB, playlistData, uid, playlistID]);

  useEffect(() => {
    if (playlistData && playlistID) {
      syncPlayList();
    }
  }, [playlistData, playlistID, syncPlayList]);

  useEffect(() => {
    getDataCB();
  }, [getDataCB]);

  const setFirstUnwatchedVideo = (data) => {
    if (data) {
      const firstUnwatchedVideo =
        data.videos[
          data.videos.indexOf(
            data.videos.find((item) => item.watched === false)
          )
        ].videoId;
      setCurrentVideo(firstUnwatchedVideo);
    }
  };

  const findVideoAndSetWatched = async (videoId, what) => {
    db.collection("users")
      .doc(uid)
      .collection("currentlyEnrolled")
      .doc(playlistData.playlistInfo.playlistID)
      .get()
      .then((data) => {
        data = data.data();
        data.videos.forEach((video) => {
          if (video.videoId === videoId) {
            if (!what) {
              video.watched = !video.watched;
            } else {
              video.watched = what;
            }
            return;
          }
        });

        db.collection("users")
          .doc(uid)
          .collection("currentlyEnrolled")
          .doc(playlistData.playlistInfo.playlistID)
          .set({
            playlistInfo: data.playlistInfo,
            videos: data.videos,
            totalWatched: data.totalWatched + 1,
          });
        setPlaylistData(data);
      });
  };

  const handleVideoEnded = () => {
    let idx;
    findVideoAndSetWatched(currentVideo, true);
    playlistData.videos.forEach((video) => {
      if (video.videoId === currentVideo) {
        idx = playlistData.videos.indexOf(video);
      }
    });
    idx === -1
      ? setCurrentVideo(currentVideo)
      : setCurrentVideo(playlistData.videos[++idx].videoId);
    setVideoDescription(playlistData.videos[idx].description);
  };

  const returnIframMarkup = () => {
    let videoURL = `https://www.youtube.com/embed/${currentVideo}`;
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
      ></ReactPlayer>
    );
  };

  const RenderMenuItem = ({ videos }) => {
    if (videos === undefined) {
      return null;
    }
    const renderedMenuItem = videos.map((video) => {
      return (
        <Menu.Item
          key={video.videoId}
          className="menu-item"
          style={{ fontSize: 12 }}
          onClick={() => {
            setVideoDescription(video.description);
            setCurrentVideo(video.videoId);
          }}
        >
          <Checkbox
            className="menu-checkbox"
            checked={video.watched}
            onChange={() => {
              findVideoAndSetWatched(video.videoId, undefined);
            }}
          ></Checkbox>
          {video.title}
        </Menu.Item>
      );
    });
    return <Menu selectedKeys={[selectedMenuItem]}>{renderedMenuItem}</Menu>;
  };

  const handleMenuCollapse = (collapsed) => {
    setMenuCollapsed(collapsed);
    menuCollapsed ? setVideoMargin(400) : setVideoMargin(72);
  };

  return (
    <div>
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
          <Menu theme="light" mode="inline" selectedKeys={[selectedMenuItem]}>
            <Menu.Item key="9" style={{ paddingTop: 120, textAlign: "center" }}>
              <h2>Videos</h2>
            </Menu.Item>
            {playlistData ? (
              <RenderMenuItem videos={playlistData.videos} />
            ) : (
              " "
            )}
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
    </div>
  );
};

export default RenderWithTracking;
