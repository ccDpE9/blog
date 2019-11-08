import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

interface IndexPageProps {
}

const App: React.SFC<IndexPageProps> = ({ data }) => {
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `Total post${
    totalCount === 1 ? "" : "s"
  } number: ${totalCount}"`

  return (
    <Layout>
      <section className="articles">
	<h4>{ tagHeader }</h4>
	{edges.map(({ node }, index) => (
	<div classname="articles__article" id={ node.id }>
	  <Link to={node.fields.slug}>
	    <h3 className="articles__title">{ index + 1}. { node.frontmatter.title }</h3>
	    <span className="articles__date">{ node.frontmatter.date } | </span>
	    {node.frontmatter.tags ? (
	      <div className="articles__tags">
		{node.frontmatter.tags.map(tag => (
		<Link to={`/tags/${tag}`}>
		  <span className="articles__tag">{tag}</span>
		</Link>
		))}
	      </div>
	    ) : null }
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
	    date(formatString: "DD-MM-YYYY")
	    tags
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
