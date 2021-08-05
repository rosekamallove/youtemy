import { faChevronRight } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import "./CoursesPage.css";

export default function CoursesPage() {
  function playlist(id) {
    <VideoPlayer playlistID={id}></VideoPlayer>;
  }

  return (
    <div className="very-center">
      <div className="webd">
      <section className="heading">
        <h1>Web Development Track</h1>
      </section>

      <section className="video-section basic">
<<<<<<< HEAD
          
          <div className="video">
            <Link
              to={{
                pathname: "/video-player",
                playlistID: "PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88",
              }}
            >
              <img src={img1} alt="Freecodecamp HTML+CSS"></img>
            </Link>
            <FontAwesomeIcon icon={faChevronRight} size='5x' className="icon"/>
          </div>
 
          

          <div className="video">
            <Link
              to={{
                pathname: "/video-player",
                playlistID: "PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX",
              }}
            >
              <img src={img2} alt="Traverssy JS"></img>
            </Link>
            <FontAwesomeIcon icon={faChevronRight} size='5x' className="icon"/>
          </div>



          <div className="video">
          <Link
            to={{
              pathname: "/video-player",
              playlistID: "PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
            }}
          >
            <img src={img3} alt="React JS"></img>
          </Link>
          </div>
    </section>
  </div>

  <div className="machine-learning">
      <section className="heading">
          <h1>Machine Learning Track</h1>
      </section>
      
      <section className="video-section basic">
          
          <div className="video">
            <Link
              to={{
                pathname: "/video-player",
                playlistID: "PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88",
              }}
            >
              <img src={img1} alt="Freecodecamp HTML+CSS"></img>
            </Link>
            <FontAwesomeIcon icon={faChevronRight} size='5x' className="icon"/>
          </div>
 
          

          <div className="video">
            <Link
              to={{
                pathname: "/video-player",
                playlistID: "PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX",
              }}
            >
              <img src={img2} alt="Traverssy JS"></img>
            </Link>
            <FontAwesomeIcon icon={faChevronRight} size='5x' className="icon"/>
          </div>



          <div className="video">
          <Link
            to={{
              pathname: "/video-player",
              playlistID: "PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
            }}
          >
            <img src={img3} alt="React JS"></img>
          </Link>
          </div>
    </section>
  </div>
  </div>
=======
        <Link
          to={{
            pathname: "/video-player",
            playlistID: "PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88",
          }}
        >
          <img src={img1} alt="Freecodecamp HTML+CSS"></img>
        </Link>

        <FontAwesomeIcon icon={faChevronRight} size="5x" />

        <Link
          to={{
            pathname: "/video-player",
            playlistID: "PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX",
          }}
        >
          <img src={img2} alt="Traverssy JS"></img>
        </Link>

        <FontAwesomeIcon icon={faChevronRight} size="5x" />

        <Link
          to={{
            pathname: "/video-player",
            playlistID: "PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
          }}
        >
          <img src={img3} alt="React JS"></img>
        </Link>
      </section>
      <Footer />
    </div>
>>>>>>> 55bd9d80b894ae2f252be65333baa34ab7f694fc
  );
}
