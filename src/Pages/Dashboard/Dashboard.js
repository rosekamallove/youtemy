import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <Link
        to={{
          pathname: "/video-player",
          playlistID: "PL4cUxeGkcC9itfjle0ji1xOZ2cjRGY_WB",
        }}
      >
        click
      </Link>
    </div>
  );
}