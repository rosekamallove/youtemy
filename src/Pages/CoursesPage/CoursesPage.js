import {
  CaretRightOutlined,
  CopyOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import "antd/dist/antd.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import getVideos from "../../apis/getVideos";
import Footer from "../../Components/Footer/Footer";
import { db } from "../../firebase";
import { UserContext } from "../../UserContext";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import "./CoursesPage.css";
const { Meta } = Card;

export default function CoursesPage() {
  const { uid, setUid } = useContext(UserContext);
  const videos = [];

  const handleCourseButtonClicked = async (playlistID) => {
    const data = await getVideos(playlistID);
    console.log(data);
    let playlistInfo = {
      thumbnail: data.items[0].snippet.thumbnails.medium.url,
      title: data.items[0].snippet.title,
      playlistID,
    };
    data.items.forEach((item) => {
      videos.push({ videoId: item.id, watched: false });
    });
    console.log(playlistInfo);
    db.collection("users")
      .doc(uid)
      .collection("currentlyEnrolled")
      .doc(playlistID)
      .set({ playlistInfo, videos });
  };

  const handleAddToBookamrk = async (playlistID) => {
    const data = await db.collection("users").doc(uid).get();
    let bookmarks = await data.data().bookmarks;
    bookmarks.push(playlistID);
    db.collection("users").doc(uid).set({ bookmarks }, { merge: true });
  };

  return (
    <div className="wrapper">
      <div className="very-center">
        <section className="heading">
          <h1>Web Development Track</h1>
        </section>

        <section className="video-section">
          <Card
            style={({ width: 300 }, { padding: 0 }, { margin: 20 })}
            cover={<img src={img1} alt="Freecodecamp HTML+CSS"></img>}
            actions={[
              <Link
                to={{
                  pathname: "/video-player",
                  playlistID: "PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88",
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
              <CopyOutlined
                onClick={() => {
                  handleAddToBookamrk("PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88");
                }}
              />,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://clipground.com/images/freecodecamp-logo-6.jpg" />
              }
              title="HTML+CSS "
              description="By FreeCodeCamp"
            />
          </Card>

          <Card
            style={({ width: 300 }, { padding: 0 }, { margin: 20 })}
            cover={<img src={img2} alt="Traverssy JS"></img>}
            actions={[
              <Link
                to={{
                  pathname: "/video-player",
                  playlistID: "PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX",
                }}
              >
                <CaretRightOutlined
                  key="Play"
                  onClick={() => {
                    handleCourseButtonClicked(
                      "PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX"
                    );
                  }}
                />
              </Link>,
              <PlusCircleOutlined
                key="Enroll"
                onClick={() => {
                  handleCourseButtonClicked(
                    "PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX"
                  );
                }}
              />,
              <CopyOutlined
                onClick={() => {
                  handleAddToBookamrk("PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX");
                }}
              />,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s68-c-k-c0x00ffffff-no-rj" />
              }
              title="Javascript"
              description="By Traversy Media"
            />
          </Card>

          <Card
            style={({ width: 350 }, { padding: 0 }, { margin: 20 })}
            cover={<img src={img3} alt="ReactJS"></img>}
            actions={[
              <Link
                className="action-link"
                to={{
                  pathname: "/video-player",
                  playlistID: "PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
                }}
              >
                <CaretRightOutlined key="Play" />
              </Link>,
              <PlusCircleOutlined
                key="Enroll"
                onClick={() => {
                  handleCourseButtonClicked(
                    "PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d"
                  );
                }}
              />,
              <CopyOutlined
                onClick={() => {
                  handleAddToBookamrk("PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d");
                }}
              />,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://yt3.ggpht.com/ytc/AKedOLT3v89U-2iVX-78hqPk1-lBIduTcljrKLIH9YJg1A=s176-c-k-c0x00ffffff-no-rj" />
              }
              title="React JS"
              description="By The Net Ninja"
            />
          </Card>
        </section>
      </div>
      <Footer />
    </div>
  );
}
