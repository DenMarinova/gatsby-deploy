// const path = require(`path`)
// const { slash } = require(`gatsby-core-utils`)

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   // query content for WordPress posts
//   const result = await graphql(`
//     query {
//       allWordpressPost {
//         edges {
//           node {
//             id
//             slug
//           }
//         }
//       }
//     }
//   `)

//   const postTemplate = path.resolve(`./src/templates/post.js`)
//   result.data.allWordpressPost.edges.forEach(edge => {
//     createPage({
//       // will be the url for the page
//       path: `/post/${edge.node.slug}/`,
//       // specify the component template of your choice
//       component: slash(postTemplate),
//       // In the ^template's GraphQL query, 'id' will be available
//       // as a GraphQL variable to query for this posts's data.
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })
// }

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            content
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allWordpressPost.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
  })
}