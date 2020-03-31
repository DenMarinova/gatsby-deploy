// import React, {Component} from "react"

// class PageTemplate extends Component {
//     render() {
//         const siteMetadata = this.props.data.site.siteMetadata
//         const currentPage = this.props.data.wordpressPage

//         console.log(currentPage)

//         return (
//             <div>
//                 <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
//                 <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>

//                 <p dangerouslySetInnerHTML={{__html: currentPage.date}} />
//                 <p dangerouslySetInnerHTML={{__html: currentPage.slug}} />
//             </div>
//         )
//     }
// }

// export default PageTemplate

// export const pageQuery = graphql`
    // query currentPageQuery($id: String!) {
    //     wordpressPage(id: { eq: $id }) {
    //         title
    //         content
    //         slug
    //         id
    //         date(formatString: "MMMM DD, YYYY")
    //     }
    //     site {
    //         id
    //         siteMetadata {
    //             title
                
    //         }
    //     }
    // }`


import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
    const page = data.allWordpressPage.edges[0].node
  
    return (
      <Layout>
        <div>
          <h1>{page.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
       
        </div>
      </Layout>
    )
  }

export const query = graphql`
query($slug: String!) {
  allWordpressPage(filter: { slug: { eq: $slug } }) {
    edges {
      node {
        title
        content
      }
    }
  }
}
  
`