import { CopyOutlined } from "@ant-design/icons";
import { Button, Card, Col, Popconfirm, Row } from "antd";
import React from "react";
import "../BookmarksPage/BookmarksPage.css";
import "./SettingsPage.css";

export default function SettingsPage() {
  const handleAllBookmarksDelete = () => {
    console.log(new Date());
  };
  const handleDeleteCourses = () => {
    console.log(new Date());
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
              <Button
                type="primary"
                danger
                onClick={handleAllBookmarksDelete}
                icon={<CopyOutlined />}
              >
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
