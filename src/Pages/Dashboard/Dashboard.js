import {
  CaretRightOutlined,
  DeleteOutlined,
  ExpandAltOutlined,
} from "@ant-design/icons";
import { Card, Progress, Space } from "antd";
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

  /* Setting the userId */
  const { uid, setUid } = useContext(UserContext);
  const UID = firebase.auth().currentUser.uid;
  setUid(UID);

  /* Setting the name */
  db.collection("users").doc(UID).set(
    {
      name: firebase.auth().currentUser.displayName.toString(),
    },
    { merge: true }
  );

  /* Getting Enrolled Courses */
  useEffect(() => {
    db.collection("users")
      .doc(UID)
      .collection("currentlyEnrolled")
      .get()
      .then((docs) => {
        const currentlyEnrolled = [];
        docs.forEach((doc) => {
          currentlyEnrolled.push(doc.data());
        });
        setCurrentlyEnrolled({ data: currentlyEnrolled });
      });
    console.log(currentlyEnrolled);
  }, []);

  const RenderCards = ({ playlistData }) => {
    const renderedCards = playlistData.map((playlist) => {
      return (
        <Card
          style={{ width: 300, margin: 10 }}
          // cover={<img alt="example" src={playlist.playlistInfo.thumbnail} />}
          actions={[
            <Link
              to={{
                pathname: "/video-player",
                playlistID: playlist.playlistInfo.playlistID,
              }}
            >
              <CaretRightOutlined key="play" />
            </Link>,
            <Link to={{ pathname: "/settings" }}>
              <DeleteOutlined key="edit" />
            </Link>,
          ]}
        >
          <Meta title={playlist.playlistInfo.title} />
        </Card>
      );
    });
    return (
      <React.Fragment>
        <h2 className="card-heading">Enrolled Courses</h2>
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
              <Progress type="circle" percent={69} width={207}></Progress>
            </div>
            <Meta
              title="Current Course Progress"
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
              <Link to="/explore">
                <CaretRightOutlined key="play" />
              </Link>,
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
