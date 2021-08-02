import React from "react";
import "./CoursesPage.css";
import ReactPlayer from "react-player";

export default function CoursesPage(){
  return (
    <div className="very-center">
      <section className="heading">
          <h1>Web Development</h1>
      </section>
      <section className="video-section">       
          <ReactPlayer url="https://www.youtube.com/watch?v=pQN-pnXPaVg" controls class="video"/>
          <ReactPlayer url="https://www.youtube.com/watch?v=1Rs2ND1ryYc" controls class="video"/>
          <ReactPlayer url="https://www.youtube.com/watch?v=PkZNo7MFNFg" controls class="video"/>
      </section>
    </div>
  );
}