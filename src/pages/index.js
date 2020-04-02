import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import postsStyle from './index.module.scss'
import Img from 'gatsby-image'

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      
      {data.allWordpressPost.edges.map(({ node }) => (

        <div className={postsStyle.posts} key={node.id}>  
 
         <Link to={node.slug}>
            {node.featured_media && 
              <div>
                  <Img resolutions={ node.featured_media.localFile.childImageSharp.resolutions }/> 
            </div> 
            } 
            
            <h2>{node.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </Link>
          <hr></hr>
        </div>
      ))}

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
            localFile {
              childImageSharp {
                resolutions(width: 500, height: 200) {
                  width
                  height
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`


