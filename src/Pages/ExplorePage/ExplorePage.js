import { Card } from "antd";
import React from "react";
import instance from "../../apis/youtube";
import Footer from "../../Components/Footer/Footer";
import "./ExplorePage.css";
import PlaylistsList from "./PlaylistsList";
import SearchBar from "./SearchBar";

class ExplorePage extends React.Component {
  state = {
    playlists: [],
  };
  handleSubmit = async (termFromSearchBar) => {
    const response = await instance.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });

    this.setState({
      playlists: response.data.items,
    });
  };

  render() {
    return (
      <div className="ui container">
        <div className="mainbody">
          <Card
            className="searchbar"
            style={({ width: 500 }, { padding: 0 }, { margin: 20 })}
          >
            <SearchBar handleFormSubmit={this.handleSubmit} />
          </Card>
          <div className="allplaylists">
            <PlaylistsList
              className="playlist-item"
              playlists={this.state.playlists}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ExplorePage;
