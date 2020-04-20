import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

const App = ({ pageContext, data }) => {
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `Total post${
    totalCount === 1 ? "" : "s"
  } number: ${totalCount}`
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage - 1 === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page-${(currentPage - 1).toString()}`
  const nextPage = `/page-${(currentPage + 1).toString()}`

  return (
    <Layout>
      <section className="articles">
        <h4>{ tagHeader }</h4>
        {edges.map(({ node }, index) => (
          <div className="articles__article" id={ node.id }>
            <Link to={node.fields.slug}>
              <h3 className="articles__title">{ index + 1}. { node.frontmatter.title }</h3>
              <span className="articles__date">{ node.frontmatter.date } | </span>
            </Link>
          </div>
        ))}
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link key={`pagination-number${i+1}`} to={i === 0 ? "/" : `/page-${i + 1}`}>
            {i + 1}
          </Link>
        ))}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </section>
    </Layout>
  )
}

export default App

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
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
`
