import { CopyOutlined } from "@ant-design/icons";
import { Button, Card, Col, message, Popconfirm, Row } from "antd";
import React, { useContext, useState, useEffect } from "react";
import { db } from "../../firebase";
import { UserContext } from "../../UserContext";
import "../BookmarksPage/BookmarksPage.css";
import "./SettingsPage.css";

export default function SettingsPage() {
  const { uid } = useContext(UserContext);
  const [currentlyEnrolled, setCurrentlyEnrolled] = useState({});

  const docRef = db
    .collection("users")
    .doc(uid)
    .collection("currentlyEnrolled");

  useEffect(() => {
    db.collection("users")
      .doc(uid)
      .collection("currentlyEnrolled")
      .get()
      .then((docs) => {
        let currentlyEnrolled = [];
        docs.forEach((doc) => {
          currentlyEnrolled.push(doc.data());
        });
        setCurrentlyEnrolled({ data: currentlyEnrolled });
      });
  }, []);

  const handleAllBookmarksDelete = async () => {
    const hide = message.loading("Deleting from the Database...", 0);
    const data = await db.collection("users").doc(uid).get();

    let bookmarks = await data.data().bookmarks;
    bookmarks.splice(0, bookmarks.length);
    db.collection("users").doc(uid).set({ bookmarks });

    setTimeout(hide, 0);
    message.success("Deleted all Bookmarks !!");
  };

  const handleDeleteCourses = () => {
    const hide = message.loading("Deleting from the Database...", 0);

    console.log(currentlyEnrolled);

    currentlyEnrolled.data.map((playlist) => {
      docRef.doc(playlist.playlistInfo.playlistID).delete();
    });

    setTimeout(hide, 1000);
    message.success("Deleted all Courses !!");
  };
  return (
    <div className="wrapper____">
      <Row gutter={[16, 24]} align="center">
        <Col className="gutter-row" span={12} align="center">
          <Card title="Delete all Bookmarks" style={{ width: 300 }}>
            <Popconfirm
              title="Are you sure"
              onConfirm={() => {
                handleAllBookmarksDelete();
              }}
            >
              <Button type="primary" danger icon={<CopyOutlined />}>
                Delete Bookmarks
              </Button>
            </Popconfirm>
          </Card>
        </Col>
        <Col className="gutter-row" span={12} align="center">
          <Card title="Unenroll from all courses" style={{ width: 300 }}>
            <Popconfirm
              title="All the tracking will be lost"
              onConfirm={() => {
                handleDeleteCourses();
              }}
            >
              <Button type="primary" danger icon={<CopyOutlined />}>
                Delete all Courses
              </Button>
            </Popconfirm>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
