import { Card, Row } from "antd";
import React, { useContext } from "react";
import Footer from "../../Components/Footer/Footer";
import { db } from "../../firebase";
import { UserContext } from "../../UserContext";
import "./BookmarksPage.css";

const { Meta } = Card;

export default function BookmarksPage() {
  const { uid, setUid } = useContext(UserContext);
  // const handleCourseDelete = (playlistID) => {};
  (async function () {
    const data = db
      .collection("users")
      .doc(uid)
      .get()
      .then((data) => {
        data.forEach((doc) => {
          console.log(doc.data());
        });
      });
    // console.log(data.data());
  })();
  // const RenderCards = (bookmarks) => { const renderCards = bookmarks.map((playlistID) => {});
  //   return (
  //     <Col className="gutter-row" span={6}>
  //       <Card
  //         style={{ width: 300, margin: 0 }}
  //         actions={[
  //           <Link
  //             to={{
  //               pathname: "/video-player",
  //               playlistID: "",
  //             }}
  //           >
  //             <CaretRightOutlined key="play" />
  //           </Link>,
  //           <DeleteOutlined
  //             key="edit"
  //             onClick={() =>
  //               handleCourseDelete(/*playlist.playlistInfo.playlistID*/)
  //             }
  //           />,
  //         ]}
  //       >
  //         <Meta title="title" />
  //       </Card>
  //     </Col>
  //   );
  return (
    <div className="wrapper____">
      <Row gutter={[16, 24]}>{/* <RenderCards /> */}</Row>
      <Footer />
    </div>
  );
}
