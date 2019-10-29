import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

interface IndexPageProps {
}

const App: React.SFC<IndexPageProps> = ({ data }) => {
  const articles = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h4>{ data.allMarkdownRemark.totalCount }</h4>
      <section className="articles">
	{articles.map(({ node }) => (
	<div id={ node.id }>
	  <p>One article</p>
	  <Link to={node.fields.slug}>
	    <h3>
	      { node.frontmatter.title }
	      <span>- { node.frontmatter.date }</span>
	    </h3>
	    <p>{ node.exceprt }</p>
	  </Link>
	</div>
	))}
      </section>
    </Layout>
  )
}

export default App

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
	node {
	  id
	  frontmatter {
	    title
	    description
	    date(formatString: "DD MMMM, YYYY")
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
