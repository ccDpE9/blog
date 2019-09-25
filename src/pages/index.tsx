import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
	title: string;
      }
    }
  }
}

const App: React.SFC<IndexPageProps> = (props) => {
  return (
    <Layout>
      <section className="articles">
	{props.data.allFile.edges.map(({ node }, index) => (
	))}
      </section>
    </Layout>
  )
}

export default App

export const pageQuery = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter__date], order: DESC }) {
    edges {
      node {
	excerpt
	fields {
	  slug
	}
	frontmatter {
	  date(formatString: "MMMMM DD, YYYY")
	  title
	  description
	}
      }
    }
  }
}
`
