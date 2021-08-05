import React from "react";
import { Link } from "react-router-dom";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import "./CoursesPage.css";
import { Card, Avatar } from 'antd';
import {CaretRightOutlined,PlusCircleOutlined,YoutubeOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Meta } = Card;

export default function CoursesPage() {

  return (
    <div className="very-center">
      <section className="heading">
        <h1>Web Development Track</h1>
      </section>

      <section className="video-section">  
          <Card 
              style={{width:300},{padding:0},{margin:20}}
              cover={
                <Link
                    to={{
                      pathname: "/video-player",
                      playlistID: "PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88",
                    }}
                  >
                    <img src={img1} alt="Freecodecamp HTML+CSS"></img>
                </Link>
              }
              actions={[
                <CaretRightOutlined key="Play" />,
                <PlusCircleOutlined key="Enroll" />,
                <YoutubeOutlined key="Open In Youtube" />,
              ]}
          >     
          <Meta
              avatar={<Avatar src="https://clipground.com/images/freecodecamp-logo-6.jpg" />}
              title="HTML+CSS "
              description="By FreeCodeCamp"
          />
          </Card>
          
          
          <Card 
              style={{width:300},{padding:0},{margin:20}}
              cover={
                <Link
                    to={{
                      pathname: "/video-player",
                      playlistID: "PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX",
                    }}
                  >
                    <img src={img2} alt="Traverssy JS"></img>
                </Link>
              }
              actions={[
                <CaretRightOutlined key="Play" />,
                <PlusCircleOutlined key="Enroll" />,
                <YoutubeOutlined key="Open In Youtube" />,
              ]}
          >     
          <Meta
              avatar={<Avatar src="https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s68-c-k-c0x00ffffff-no-rj" />}
              title="Javascript"
              description="By Traversy Media"
          />
          </Card>

<Card 
              style={{width:300},{padding:0},{margin:20}}
              cover={
                <Link
                    to={{
                      pathname: "/video-player",
                      playlistID: "PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
                    }}
                  >
                    <img src={img3} alt="ReactJS"></img>
                </Link>
              }
              actions={[
                <CaretRightOutlined key="Play" />,
                <PlusCircleOutlined key="Enroll" />,
                <YoutubeOutlined key="Open In Youtube" />,
              ]}
          >     
          <Meta
              avatar={<Avatar src="https://yt3.ggpht.com/ytc/AKedOLT3v89U-2iVX-78hqPk1-lBIduTcljrKLIH9YJg1A=s176-c-k-c0x00ffffff-no-rj" />}
              title="React JS"
              description=""
          />
          </Card>
      </section>
  </div>
);
}
