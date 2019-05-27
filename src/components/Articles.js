import React from 'react';
import { connect } from "react-redux";

const Articles = () => (
  <ul className="articles-list">
    { articles.map(article =>
      <li className="articles-list__item">
        <span className="article-list__title"><a href="#">article.title</a></span>
        <span className="article-list__timestamp">article.timestamp</span>
        <span className="article-list__description">article.description</span>
      </li>
    )}
  </ul>
);

const mapStateToProps = state => const { articles } = state;

export default connect(
  mapStateToProps,
)(Articles);
