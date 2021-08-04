import React from "react";
import "./CoursesPage.css";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/fontawesome-free-solid';
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from './3.jpg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function CoursesPage(){
  
  function playlist(id){
      <VideoPlayer playlistID={id}></VideoPlayer>
  }
  
  return (
    <div className="very-center">
      <section className="heading">
          <h1>Web Development Track</h1>
      </section>

      <h2>Basic</h2>
      
      <section className="video-section basic"> 
        <div>

          <img src={img1} 
           onClick={<playlist id="PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88"></playlist>} 
           alt="Freecodecamp HTML+CSS">
           </img>
        </div>
          <FontAwesomeIcon icon={faChevronRight} size='5x'/>
        <div>
          <img src={img2} 
           onClick={<playlist id="PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX"></playlist>} 
           alt="Traversy JS">
           </img>
        </div>
          <FontAwesomeIcon icon={faChevronRight} size='5x'/>
          
          <div>
          <img src={img3} 
           onClick={<playlist id="PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d"></playlist>} 
           alt="Traversy JS">
           </img>
        </div>
      </section>

      <h2>Intermediate</h2>

      <section className="video-section intermediate">
        
      </section>
    </div>
  );
}