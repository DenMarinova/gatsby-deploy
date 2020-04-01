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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
{
  allWordpressPost(sort: {fields: [date]}) {
    edges {
      node {
        slug
      }
    }
  }
  allWordpressPage {
    edges {
      node {
        slug
      }
    }
  }
}`)

  response.data.allWordpressPost.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.slug,
      },
    })
  })

  response.data.allWordpressPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}

