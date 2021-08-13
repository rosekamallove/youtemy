import Search from "antd/lib/transfer/search";
import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="field">
            <label htmlFor="playlist-search"></label>
            <Search
              onChange={this.handleChange}
              name="playlist-search"
              type="text"
              placeholder="Search.."
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
