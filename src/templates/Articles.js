import React from "react";
import { graphql } from "gatsby";
import ArticlePreview from "../components/ArticlePreview";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";

const App = ({ pageContext, data }) => {
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `Total post${
    totalCount === 1 ? "" : "s"
  } number: ${totalCount}`;

  return (
    <Layout>
      <section className="articles">
        <h4>{tagHeader}</h4>
        {edges.map(({ node }) => (
          <ArticlePreview data={node} />
        ))}
      </section>
      <Pagination
        currentPage={pageContext.currentPage}
        numPages={pageContext.numPages}
      />
    </Layout>
  );
};

export default App;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
