import React, { Component } from 'react';

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      articles: []
    };


    this.renderArticles = this.renderArticles.bind(this);
  }

  componentWillMount() {
    this.setState({
      articles: props.articles
    });
  }

  renderArticles() {
    this.state.articles.forEach(article => {
      return (
        <li className="articles-list__item">
          <span className="article-list__title"><a href="#">article.title</a></span>
          <span className="article-list__timestamp">article.timestamp</span>
          <span className="article-list__description">article.description</span>
        </li>
      )
    });
  };

  render() {
    return (
      <section className="articles">
        <ul className="articles-list">
          { this.renderArticles() }
        </ul>
      </section>
    )
  }
}

export default Articles;

