import React from "react";
import "./CoursesPage.css";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/fontawesome-free-solid';
export default function CoursesPage(){
  return (
    <div className="very-center">
      <section className="heading">
          <h1>Web Development</h1>
      </section>

      <h2>Basic</h2>
      
      <section className="video-section basic"> 

          <ReactPlayer url="https://www.youtube.com/watch?v=pQN-pnXPaVg" controls class="video"/>
          <FontAwesomeIcon icon={faChevronRight}/>
          <ReactPlayer url="https://www.youtube.com/watch?v=1Rs2ND1ryYc" controls class="video"/>
          <FontAwesomeIcon icon={faChevronRight}/>
          <ReactPlayer url="https://www.youtube.com/watch?v=PkZNo7MFNFg" controls class="video"/>
      </section>

      <h2>Intermediate</h2>
      
      <section className="video-section intermediate">

        <ReactPlayer url="https://www.youtube.com/watch?v=4UZrsTqkcW4" controls class="video"/>
        <FontAwesomeIcon icon={faChevronRight}/>
        <ReactPlayer url="https://www.youtube.com/watch?v=Oe421EPjeBE" controls class="video"/>
        <FontAwesomeIcon icon={faChevronRight}/>
        <ReactPlayer url="https://www.youtube.com/watch?v=4yqu8YF29cU" controls class="video"/>
        
      </section>
    </div>
  );
}