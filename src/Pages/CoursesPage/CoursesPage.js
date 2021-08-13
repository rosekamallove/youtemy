import {
  CaretRightOutlined,
  CopyOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import "antd/dist/antd.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import handleAddToBookamrk from "../../firestore/addBookmarks";
import handleAddCourse from "../../firestore/addCourse";
import { UserContext } from "../../UserContext";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import "./CoursesPage.css";
const { Meta } = Card;

export default function CoursesPage() {
  const { uid } = useContext(UserContext);

  return (
    <div className="wrapper">
      <div className="very-center">
        <section className="heading">
          <h1>Frontend Development Track</h1>
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
                  tracking: false,
                }}
              >
                <CaretRightOutlined key="Play" />
              </Link>,
              <PlusCircleOutlined
                key="Enroll"
                onClick={() => {
                  handleAddCourse("PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88", uid);
                }}
              />,
              <CopyOutlined
                onClick={() => {
                  handleAddToBookamrk(
                    "PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88",
                    uid,
                    "HTML, CSS - FreeCodeCamp"
                  );
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
                  tracking: false,
                }}
              >
                <CaretRightOutlined
                  key="Play"
                  onClick={() => {
                    handleAddCourse("PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX", uid);
                  }}
                />
              </Link>,
              <PlusCircleOutlined
                key="Enroll"
                onClick={() => {
                  handleAddCourse("PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX", uid);
                }}
              />,
              <CopyOutlined
                onClick={() => {
                  handleAddToBookamrk(
                    "PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX",
                    uid,
                    "Javascript - Traversy Media"
                  );
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
                  tracking: false,
                }}
              >
                <CaretRightOutlined key="Play" />
              </Link>,
              <PlusCircleOutlined
                key="Enroll"
                onClick={() => {
                  handleAddCourse("PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d", uid);
                }}
              />,
              <CopyOutlined
                onClick={() => {
                  handleAddToBookamrk(
                    "PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
                    uid,
                    "ReactJS - Net Ninja"
                  );
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

      <div className="very-center">
        <section className="heading">
          <h2>Machine Learning Track</h2>
        </section>
        <section className="video-section">
          <Card
            style={({ width: 300 }, { padding: 0 }, { margin: 20 })}
            cover={<img src={img4} alt="Python Programming"></img>}
            actions={[
              <Link
                to={{
                  pathname: "/video-player",
                  playlistID: "PLQVvvaa0QuDeAams7fkdcwOGBpGdHpXln",
                  tracking: false,
                }}
              >
                <CaretRightOutlined key="Play" />
              </Link>,
              <PlusCircleOutlined
                key="Enroll"
                onClick={() => {
                  handleAddCourse("PLQVvvaa0QuDeAams7fkdcwOGBpGdHpXln", uid);
                }}
              />,
              <CopyOutlined
                onClick={() => {
                  handleAddToBookamrk(
                    "PLQVvvaa0QuDeAams7fkdcwOGBpGdHpXln",
                    uid,
                    "Python - By Sentdex"
                  );
                }}
              />,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://yt3.ggpht.com/ytc/AKedOLS4PrPaM3XUymase4vM38wnsSYY803EreFCHVoatg=s88-c-k-c0x00ffffff-no-rj" />
              }
              title="Python Programming "
              description="By Sentdex"
            />
          </Card>

          <Card
            style={({ width: 300 }, { padding: 0 }, { margin: 20 })}
            cover={<img src={img5} alt="Machine Learning"></img>}
            actions={[
              <Link
                to={{
                  pathname: "/video-player",
                  playlistID: "PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v",
                  tracking: false,
                }}
              >
                <CaretRightOutlined
                  key="Play"
                  onClick={() => {
                    handleAddCourse("PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v", uid);
                  }}
                />
              </Link>,
              <PlusCircleOutlined
                key="Enroll"
                onClick={() => {
                  handleAddCourse("PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v", uid);
                }}
              />,
              <CopyOutlined
                onClick={() => {
                  handleAddToBookamrk(
                    "PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v",
                    uid,
                    "Intro to Machine Learning"
                  );
                }}
              />,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://yt3.ggpht.com/ytc/AKedOLS4PrPaM3XUymase4vM38wnsSYY803EreFCHVoatg=s88-c-k-c0x00ffffff-no-rj" />
              }
              title="Intro to Machine Learning"
              description="By Sentdex"
            />
          </Card>

          <Card
            style={({ width: 350 }, { padding: 0 }, { margin: 20 })}
            cover={<img src={img6} alt="ML Projects"></img>}
            actions={[
              <Link
                className="action-link"
                to={{
                  pathname: "/video-player",
                  playlistID: "PLfFghEzKVmjvuSA67LszN1dZ-Dd_pkus6",
                  tracking: false,
                }}
              >
                <CaretRightOutlined key="Play" />
              </Link>,
              <PlusCircleOutlined
                key="Enroll"
                onClick={() => {
                  handleAddCourse("PLfFghEzKVmjvuSA67LszN1dZ-Dd_pkus6", uid);
                }}
              />,
              <CopyOutlined
                onClick={() => {
                  handleAddToBookamrk(
                    "PLfFghEzKVmjvuSA67LszN1dZ-Dd_pkus6",
                    uid,
                    "Machine Learning Projects - Siddhardhan"
                  );
                }}
              />,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://yt3.ggpht.com/ytc/AKedOLSKNlxTFQrCEjs7F61i_ZMpuUGXP3bQ4IbW93tM=s176-c-k-c0x00ffffff-no-rj" />
              }
              title="Machine Learning Projects"
              description="By Siddhardhan"
            />
          </Card>
        </section>
      </div>
      <Footer />
    </div>
  );
}
