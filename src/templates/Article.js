import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const article = data.markdownRemark

  return (
    <Layout>
      <div>
        <h1>{ article.frontmatter.title }</h1>
        <span>{ article.frontmatter.date }</span>
        <p>{ article.frontmatter.description }</p>
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
      </div>
    </Layout>
  )
}

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
`
