import React from "react";
import "./SearchBar.scss";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTopic: "" };
  }
  // inputChangehandler = (event) => {
  //   const updateKeyword = event.target.value;
  // }
  handleChange = event => {
    this.setState({ searchTopic: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchForTopic(this.state.searchTopic);
  };

  state = {
     keyword: 'test' 
  } 

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="searchForm">
          <input
            type="text"
            className="form-control"
            placeholder="Search news"
            required
            value={this.state.keyword} 
            onChange={this.handleChange}
            onKeyPress={this.handleChange}
          />
          <button type="submit" className="searchFormButton" onClick={this.handleSubmit}>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;