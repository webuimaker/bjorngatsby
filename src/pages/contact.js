import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle } from "react-icons/fa"
import "./index.css"

const AboutPage = (props) => {
    return (
        <Layout>
            <SEO title="Contact" />
			<div className="intro inner">
				<div className="container">
				  <h1>Contact Us</h1>          
				</div>
			</div>
            <div className="container">
               

                <div className="post-main mt-5">
                    <SEO title="About" />
                    <div className="row mt-3">
							<div className="col-md-6">
								<h2>Get in touch</h2>
								<p>Lorem ipsum dolor sit amet, consectetur venenatis tincidunt.</p>
							</div>
							<div className="col-md-6">  
								<div class="section-title">
								  <h2>Contact Info</h2>
								  <p>Lorem ipsum dolor sit consectetur adipiscing morbi venenatis et tortor consectetur adipisicing lacinia tortor morbi ultricies.</p>
							 </div>
							 <div>
								<span className="text-success d-inline-block" title="blazing">
									<FaCheckCircle size={26} style={{ color: "success" }} />
								</span>
								<p className="d-inline-block ml-3 w-75 align-top">4516 New Clony 12300, New York City, USA</p>
							</div>
							 <div>
								<span className="text-success d-inline-block" title="blazing">
									<FaCheckCircle size={26} style={{ color: "success" }} />
								</span>
								<p className="d-inline-block ml-3 w-75 align-top"><a href="mailto:info@company.com">info@company.com</a></p>
							</div>
							 <div>
								<span className="text-success d-inline-block" title="blazing">
									<FaCheckCircle size={26} style={{ color: "success" }} />
								</span>
								<p className="d-inline-block ml-3 w-75 align-top">010-020-0340</p>
							</div>
                        
                    </div>
                      
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default AboutPage

