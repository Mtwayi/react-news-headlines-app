import React from "react";
import "./Home.scss";
import "../App.scss";
import { getNewsArticles } from "./newsapi/NewsApi";
import ArticleList from "./ArticleList";
import SearchBar from "./SearchBar";

class Home extends React.Component {
  state = {
    articles: [],
    searchTopic: "",
    totalResults: "",
    loading: false,
    apiError: "",
  };

  searchForTopic = async topic => {
    try {
      this.setState({ loading: true });
      const response = await getNewsArticles(topic);
      this.setState({
        articles: response.articles,
        searchTopic: topic,
        totalResults: response.totalResults,
      });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
   
    this.setState({ loading: false });
  };

  render() {
    const {
      articles,
      apiError,
      loading,
      searchTopic,
      totalResults,
    } = this.state;
    return (
      <div className="container">
        <h2 style={{ textAlign: "center", margin: 20 }}>
          Search for news
        </h2>
        <SearchBar searchForTopic={this.searchForTopic} />
        
        {loading && (
          <p style={{ textAlign: "center", margin: 20 }}>Searching for articles...</p>
        )}
        {articles.length > 0 && (
          <h4 style={{ textAlign: "center", margin: 20 }}>
            Found {totalResults} articles on "{searchTopic}"
          </h4>
        )}
        {articles.length > 0 && (
        	<ArticleList articles={articles} />
        )}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
        <p style={{ textAlign: "center", margin: 20 }}>
          Powered by <a href="https://newsapi.org/" target="_blank">NewsAPI.org</a>
        </p>
      </div>
    );
  }
}

export default Home;