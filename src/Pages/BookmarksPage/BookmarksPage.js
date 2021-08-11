import {
  CaretRightOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { db } from "../../firebase";
import handleAddCourse from "../../firestore/addCourse";
import { UserContext } from "../../UserContext";
import "./BookmarksPage.css";

const { Meta } = Card;

export default function BookmarksPage() {
  const { uid } = useContext(UserContext);

  const [bookmarks, setBookmarks] = useState([]);
  (async function getBookmarks() {
    db.collection("users")
      .doc(uid)
      .get()
      .then((data) => {
        setBookmarks(data.data().bookmarks);
      });
  })();

  return (
    <div className="wrapper____">
      <Row gutter={[16, 24]}>
        {bookmarks.map((playlistID) => (
          <Col className="gutter-row" span={6}>
            <Card
              style={{ width: 300, margin: 0 }}
              actions={[
                <Link
                  to={{
                    pathname: "/video-player",
                    playlistID: playlistID,
                  }}
                >
                  <CaretRightOutlined key="play" />
                </Link>,
                <PlusCircleOutlined
                  key="Enroll"
                  onClick={() => {
                    handleAddCourse(playlistID, uid);
                  }}
                />,
                <DeleteOutlined key="edit" onClick={() => {}} />,
              ]}
            >
              <Meta title="title" />
            </Card>
          </Col>
        ))}
      </Row>
      <Footer />
    </div>
  );
}
