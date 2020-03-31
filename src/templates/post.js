// import React, { Component } from "react"
// import PropTypes from "prop-types"
// import Img from "gatsby-image"

// class PostTemplate extends Component {
//     render() {
//         const post = this.props.data.wordpressPost

//         return (
//             <div>
//                 <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
//                 <div dangerouslySetInnerHTML={{ __html: post.content }} />
//             </div>
//         )
//     }
// }


// export default PostTemplate

// export const pageQuery = graphql`
//     query currentPostQuery($id: String!) {
//         wordpressPost(id: { eq: $id }) {
//             title
//             content
//         }
//         site {
//             siteMetadata {
//                 title
              
//             }
//         }
//     }`

import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`