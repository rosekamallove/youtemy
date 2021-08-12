import {
  CaretRightOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Card, Col, message, Popconfirm, Popover, Row } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { db } from "../../firebase";
import handleAddCourse from "../../firestore/addCourse";
import { UserContext } from "../../UserContext";
import "./BookmarksPage.css";

const { Meta } = Card;

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState([]);
  const { uid } = useContext(UserContext);

  (async function getBookmarks() {
    db.collection("users")
      .doc(uid)
      .get()
      .then((data) => {
        if (data) {
          setBookmarks(data.data().bookmarks);
        }
      });
  })();

  const handleDeleteBookmark = async (playlistID) => {
    const hide = message.loading("Deleting from the Database...", 0);
    const data = await db.collection("users").doc(uid).get();
    let bookmarks = await data.data().bookmarks;
    const filteredBookmarks = bookmarks.filter((value, idx, arr) => {
      return value.playlistID !== playlistID;
    });
    db.collection("users").doc(uid).set({ bookmarks: filteredBookmarks });
    setTimeout(hide, 0);
    message.success("Course Delted Succesful, Refresh the page");
  };

  return (
    <div className="wrapper____">
      <Row gutter={[16, 24]}>
        {bookmarks
          ? bookmarks.map((playlist) => (
              <Col className="gutter-row" span={6} key={playlist.playlistID}>
                <Card
                  cover={<img alt="example" src={playlist.thumbnail} />}
                  style={{ width: 300, margin: 0 }}
                  actions={[
                    <Popover content="Open in the player">
                      <Link
                        to={{
                          pathname: "/video-player",
                          playlistID: playlist.playlistID,
                        }}
                      >
                        <CaretRightOutlined key="play" />
                      </Link>
                    </Popover>,
                    <Popover title="Enroll in course and start tracking it">
                      <PlusCircleOutlined
                        key="Enroll"
                        onClick={() => {
                          handleAddCourse(playlist.playlistID, uid);
                        }}
                      />
                    </Popover>,
                    <Popconfirm
                      title="Are you sure you wanna delete this?"
                      onConfirm={() => {
                        handleDeleteBookmark(playlist.playlistID);
                      }}
                    >
                      <DeleteOutlined key="edit" />
                    </Popconfirm>,
                  ]}
                >
                  <Meta title={playlist.title} />
                </Card>
              </Col>
            ))
          : ""}
      </Row>
      <Footer />
    </div>
  );
}
