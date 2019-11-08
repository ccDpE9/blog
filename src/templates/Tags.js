import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <section className="articles">
        <h4 className="articles__header">{ tagHeader }</h4>
        {edges.map(({ node }, index) => (
          <div classname="articles__article" id={ node.id }>
            <Link to={node.fields.slug}>
              <h3 className="articles__title">{ index + 1}. { node.frontmatter.title }</h3>
            </Link>
            <span className="articles__date">{ node.frontmatter.date } | </span>
            {node.frontmatter.tags ? (
              <div className="articles__tags">
                {node.frontmatter.tags.map(tag => (
                  <Link to={`tags/${tag}`}>
                    <span className="articles__tag">{tag}</span>
                  </Link>
                ))}
              </div>
            ) : null }
          </div>
        ))}
      </section>
    </Layout>
  )
}

export default Tags

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug 
          }
          frontmatter {
            title
            date(formatString: "DD-MM-YYYY")
            tags
          }
        }
      }
    }
  }
`
