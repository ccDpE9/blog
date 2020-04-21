import React from "react";
import { Link } from "gatsby";

const ArticlePreview = ({ data }) => {
  const { slug } = data.fields;
  const { title, date } = data.frontmatter;

  return (
    <article className="articles__article">
      <Link to={slug}>
        <h3 className="articles__title">{title}</h3>
        <span className="articles__date">{date}</span>
      </Link>
    </article>
  );
};

export default ArticlePreview;
