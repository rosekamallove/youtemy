import {
  CaretRightOutlined,
  DeleteOutlined,
  ExpandAltOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Card, message, Popconfirm, Popover, Progress, Space } from "antd";
import "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import firebase, { db } from "../../firebase";
import { UserContext } from "../../UserContext";
import "./Dashboard.css";

const { Meta } = Card;

export default function Dashboard() {
  const [currentlyEnrolled, setCurrentlyEnrolled] = useState({});
  const [totalProgress, setTotalProgress] = useState(0);

  /* Setting the userId */
  const { setUid } = useContext(UserContext);
  const UID = firebase.auth().currentUser.uid;
  setUid(UID);

  /* Setting the name */
  db.collection("users").doc(UID).set(
    {
      name: firebase.auth().currentUser.displayName.toString(),
    },
    { merge: true }
  );

  const updateCurrentlyEnrolled = () => {
    db.collection("users")
      .doc(UID)
      .collection("currentlyEnrolled")
      .get()
      .then((docs) => {
        let currentlyEnrolled = [];
        docs.forEach((doc) => {
          currentlyEnrolled.push(doc.data());
        });
        currentlyEnrolled = currentlyEnrolled.reverse();
        setCurrentlyEnrolled({ data: currentlyEnrolled });
      });
  };

  /* Getting Enrolled Courses */
  useEffect(() => {
    updateCurrentlyEnrolled();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [UID]);

  useEffect(() => {
    calculateAndSetTotalProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCourseDelete = (playlistID) => {
    db.collection("users")
      .doc(UID)
      .collection("currentlyEnrolled")
      .doc(playlistID)
      .delete();
    message.success("Course Deleted Succesfully, Refresh the page !");
    updateCurrentlyEnrolled();
  };

  const calculateAndSetTotalProgress = async () => {
    let totalWatched = 0,
      totalVideos = 0;
    const data = await db
      .collection("users")
      .doc(UID)
      .collection("currentlyEnrolled")
      .get();
    data.docs.forEach((doc) => {
      totalWatched += doc.data().totalWatched;
      totalVideos += doc.data().videos.length;
    });
    const progress = Math.round((totalWatched / totalVideos) * 100);
    setTotalProgress(progress);
  };

  const RenderCards = ({ playlistData }) => {
    const renderedCards = playlistData.map((playlist) => {
      return (
        <Card
          key={playlist.playlistInfo.playlistID}
          style={{ width: 300, margin: 10 }}
          actions={[
            <Popover title="Start learning">
              <Link
                to={{
                  pathname: "/video-player",
                  playlistID: playlist.playlistInfo.playlistID,
                  tracking: true,
                }}
              >
                <CaretRightOutlined key="play" />
              </Link>
            </Popover>,
            <Popover title="Delete the course">
              <Popconfirm
                title={
                  "Are you sure you wanna delete this course, all progress will be lost"
                }
                placement="top"
                onConfirm={() =>
                  handleCourseDelete(playlist.playlistInfo.playlistID)
                }
              >
                <DeleteOutlined />
              </Popconfirm>
            </Popover>,
          ]}
        >
          <Meta title={playlist.playlistInfo.title} />
        </Card>
      );
    });
    return (
      <React.Fragment>
        {playlistData.length ? (
          <h2 className="card-heading">Enrolled Courses</h2>
        ) : (
          <Card
            title="No Courses Enrolled"
            bordered={false}
            style={{ width: 300, height: 350, marginTop: 110 }}
          >
            <h5 align="left">
              You haven't enrolled in any course, please{" "}
              <Link to="/explore">Search</Link> for a course and enroll in it by
              clicking the <PlusCircleOutlined /> button.
            </h5>
          </Card>
        )}
        {renderedCards}
      </React.Fragment>
    );
  };

  return (
    <div className="wrapper">
      <Space direction="horizontal" align="center" width="80%" size={100}>
        {currentlyEnrolled.data ? (
          <RenderCards playlistData={currentlyEnrolled.data} />
        ) : (
          ""
        )}
        <div>
          <h2 className="card-heading">Progress</h2>
          <Card style={{ width: 300 }} actions={[<ExpandAltOutlined />]}>
            <div className="progress-circle-n">
              <Popover title="Expand, show more detailed progress">
                <Progress
                  type="circle"
                  percent={totalProgress}
                  width={207}
                ></Progress>
              </Popover>
            </div>
            <Meta
              title="Total Progress"
              description="This is the description"
            />
          </Card>
        </div>
        <div>
          <h2 className="card-heading">Enroll New</h2>
          <Card
            style={{ width: 300, margin: 0 }}
            cover={
              <img
                alt="example"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d109ce23061557.563311582423a.jpg"
              />
            }
            actions={[
              <Popover title="Explore new courses">
                <Link to="/explore">
                  <CaretRightOutlined key="play" />
                </Link>
              </Popover>,
            ]}
          >
            <Meta
              title="Enroll New Courses"
              description="Explore and find what you need"
            />
          </Card>
        </div>
      </Space>
      <Footer />
    </div>
  );
}
