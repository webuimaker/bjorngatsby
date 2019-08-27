import React from "react"
import { Link, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import "./intro.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TechTag from "../components/tags/TechTag"


import Aboutinfo from '../components/Aboutinfo';
import Section3 from '../components/Section3';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  const labels = data.site.siteMetadata.labels
  const currentPage = 1
  const nextPage = (currentPage + 1).toString()

  const getTechTags = (tags) => {
    const techTags = []
    tags.forEach((tag, i) => {
      labels.forEach((label) => {
        if (tag === label.tag) {
          techTags.push(<TechTag key={i} tag={label.tag} tech={label.tech} name={label.name} size={label.size} color={label.color} />)
        }
      })
    })
    return techTags
  }


  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `javascript`, `react`, `web development`, `blog`, `graphql`]} />
      
		<div className="intro">
			<div className="container">
			  <h1>SThe Scientific Method, applied to  <br/> the creation of Economic value.</h1>          
			</div>
		</div>
		  <div className="about-info py-5 pb-5">
			<Aboutinfo/>
		  </div>
		  <div className="sec3 ">
			<Section3/>
		</div>
			  <div className="container">
				<div className="newslist py-5 pb-5">
					<div className="row ">
						<div className="col-12 ">
							<h1 className="titlenew">Latest News</h1>
						</div>
					</div>
					{posts.map((post) => {
            const tags = post.node.frontmatter.tags
            return (
				
              <div key={post.node.id} className="row list">
				<div className="col-2">
					<div className="date"><i>{post.node.frontmatter.date}</i>
                </div>
					<span className="badge">COMMENTARY</span>
				
				</div>
				<div className="col-5">
							<Link  to={post.node.fields.slug} className="text-dark" >
							<h2 className="title">{post.node.frontmatter.title}</h2>
							</Link>
						<p className="">{post.node.excerpt}</p>
				</div>
				<div className="col-5">
					
						<Link
							to={post.node.fields.slug}
						className="text-primary"
						>
						<small className="d-inline-block ml-3"> Read full post</small>
						</Link>
					<div className="d-block">
						{getTechTags(tags)}
					</div>
				
				</div>
			  
			  
                
                
                
                
                
              </div>
			  
			  
			  
			  
            )
          })}
		  </div>
          <div className="mt-4 text-center">
            <Link to={nextPage} rel="next" style={{ textDecoration: `none` }}>
              <span className="text-dark">Next Page →</span>
            </Link>
          </div>
				
				
				
				
				
			  </div>
		  
       
    </Layout>
  )
}

export const pageQuery = graphql`
         query IndexQuery {
           site {
             siteMetadata {
               title 
               author
               labels {
                 tag
                 tech 
                 name 
                 size 
                 color
               } 
             }
           }
           allMarkdownRemark(
             limit: 3
             sort: { fields: [frontmatter___date], order: DESC }
             filter: { frontmatter: { published: { eq: true } } }
           ) {
             totalCount
             edges {
               node {
                 excerpt(pruneLength: 200)
                 html
                 id
                 frontmatter {
                   title
                   date(formatString: "MMMM DD, YYYY")
                   tags
                 }
                 fields {
                   slug
                 }
               }
             }
           }
         }
       `

export default IndexPage

