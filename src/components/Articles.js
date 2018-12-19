import React from "react";

const Articles = ({ articles }) => {
  const articles = articles.map((article) => {
    return (
      <li className="articles-list">
        <h3><a href="#">{ article.title }</a></h3>
        <span>{ article.description }</span>
      </li>
    )
  });

  return (
    <ul className="articles-list__item">{ articles }</ul>
  );
};

export default Articles;
