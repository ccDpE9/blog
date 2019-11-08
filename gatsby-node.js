const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" })

    createNodeField({
      node,
      name: "slug",
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const articles = result.data.allMarkdownRemark.edges;

  // Create a page for each article
  articles.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/Article.js"),
      context: {
        slug: node.fields.slug
      }
    })
  })

  // Create a page for each tag
  let tags = [];

  articles.forEach(({ node }) => {
    node.frontmatter.tags.forEach(tag => {
      tags.includes(tag) ? null : tags.push(tag);
    })
  })

  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag}/`,
      component: path.resolve("./src/templates/Tags.js"),
      context: {
        tag
      }
    })
  })
}
