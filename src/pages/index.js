import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"


export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.id}>
         <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}

    <Link to="/page-2">Page 2</Link>
    </Layout>
  )
}

export const postQuery = graphql`
  query {
    allWordpressPost(sort: {fields: [date]}) {
      edges {
        node {
          title
          excerpt
          slug
          id
          featured_media {
            source_url
          }
        }
      }
    }
  }
`


