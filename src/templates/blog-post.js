import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"


function waitForGlobal(name, timeout = 300) {
  return new Promise((resolve, reject) => {
    let waited = 0

    function wait(interval) {
      setTimeout(() => {
        waited += interval
        // some logic to check if script is loaded
        // usually it something global in window object
        if (window[name] !== undefined) {
          return resolve()
        }
        if (waited >= timeout * 1000) {
          return reject({ message: "Timeout" })
        }
        wait(interval * 2)
      }, interval)
    }

    wait(30)
  })
}

/* eslint-disable no-restricted-globals */
class BlogPostTemplate extends React.Component {
  componentDidMount() {
    waitForGlobal("MathJax").then(() => {
      top.MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [["$", "$"], ["\\(", "\\)"]],
          displayMath: [["$$", "$$"], ["[", "]"]],
          processEscapes: true,
          processEnvironments: true,
          skipTags: ["script", "noscript", "style", "textarea", "pre"],
          TeX: {
            equationNumbers: { autoNumber: "AMS" },
            extensions: ["AMSmath.js", "AMSsymbols.js"],
          },
        },
      })
    })
    if (top.MathJax != null) {
      top.MathJax.Hub.Queue(["Typeset", top.MathJax.Hub])
    }
  }

  componentDidUpdate() {
    if (top.MathJax != null) {
      top.MathJax.Hub.Queue(["Typeset", top.MathJax.Hub])
    }
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
			
	
	
	
	
	
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          
        />
        <Helmet>
          <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
            async
          />
        </Helmet>
		<div className="intro inner mb-5">
				<div className="container">
				  <h1>{post.frontmatter.title}</h1> 
            <p className="text-center"><small><i>Published on </i> {post.frontmatter.date}</small></p>
				</div>
			</div>
		
        <article className="container"> 
         
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
           
          />
         
        </article>

      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        
      }
    }
  }
`
