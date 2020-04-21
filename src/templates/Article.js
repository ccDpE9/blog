import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export default ({ data }) => {
  const article = data.markdownRemark;

  return (
    <Layout>
      <article className="article">
        <header className="article__header">
          <h1 className="article__title">{article.frontmatter.title}</h1>
          <time className="article__date">{article.frontmatter.date}</time>
          <p className="article__description">
            {article.frontmatter.description}
          </p>
        </header>
        <div
          className="article__content"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </article>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
      }
    }
  }
`;
