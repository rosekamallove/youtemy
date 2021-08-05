import {
  CaretRightOutlined,
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, Progress, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const { Meta } = Card;

export default function Dashboard() {
  const handlePlayButtonClicked = () => {
    console.log(`crap`);
    <Link
      to={{
        pathname: "/video-player",
        playlistID: "PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP",
      }}
    ></Link>;
  };

  return (
    <div className="wrapper">
      <Space direction="horizontal" align="center" width="80%" size={400}>
        <div>
          <h2 className="card-heading">Active Course</h2>
          <Card
            style={{ width: 300, margin: 0 }}
            cover={
              <img
                alt="example"
                src="https://i.ytimg.com/vi/pN6jk0uUrD8/hqdefault.jpg"
              />
            }
            actions={[
              <CaretRightOutlined
                key="play"
                onClick={() => handlePlayButtonClicked()}
              />,
              <DeleteOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              title="Namaste JavaScript"
              description="Deep understanding of JavaScript"
            />
          </Card>
        </div>
        <div>
          <h2 className="card-heading">Progress</h2>
          <Card
            style={{ width: 300 }}
            actions={[
              <SettingOutlined
                key="setting"
                onClick={() => {
                  handlePlayButtonClicked();
                }}
              />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <div className="progress-circle-n">
              <Progress type="circle" percent={69} width={170}></Progress>
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
              <CaretRightOutlined
                key="play"
                onClick={() => handlePlayButtonClicked()}
              />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              title="Enroll New Courses"
              description="Explore and find what you need"
            />
          </Card>
        </div>
      </Space>
    </div>
  );
}
