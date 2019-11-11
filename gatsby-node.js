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

  // Create blog-list pages
  const postsPerPage = 6
  const numPages = Math.ceil(articles.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/page-${i+1}`,
      component: path.resolve("./src/templates/Articles.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      }
    })
  })

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

  let counts = {}
  articles.forEach(article => {
    article.node.frontmatter.tags.forEach(tag => {
      if (!counts.hasOwnProperty(tag)) {
        counts[tag] = {}
        counts[tag].numPosts = 1
      } else {
        counts[tag].numPosts += 1
      }
    })
  })
  for (let [tag] of Object.entries(counts)) {
    counts[tag].numPages = Math.ceil(counts[tag].numPosts / postsPerPage)
  }

  tags.forEach(tag => {
    Array.from({ length: counts[tag].numPages }).forEach((_, i) => {
      createPage({
        path: `/tags/${tag}/`,
        path: i === 0 ? `/tags/${tag}` : `/tags/${tag}-${i+1}`,
        component: path.resolve("./src/templates/Tags.js"),
        context: {
          tag,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages: counts[tag].numPages,
          currentPage: i + 1,
        }
      })
    })
  })
}
