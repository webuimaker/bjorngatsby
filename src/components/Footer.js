import React from 'react';
import logo from '../images/logo.jpg';
import facebook from '../images/social/fb.jpg'
import instagram from '../images/social/insta.jpg'
import twitter from '../images/social/twitter.jpg'
import youtube from '../images/social/youtube.jpg'


const Footer = ({ email, phone }) => (
   <div className="footer-strip mt-5">
    <div className="container">
      <div className="row"> 
		<div className="footer">
			<div className="col-4">
					<img alt="Figurit Homepage" src={logo} />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip .officia deserunt mollit anim id est laborum.


					</p>
			</div>
			<div className="col-3">
				<h4>Any Question?</h4>
				<h5> +{phone}</h5>
				<p>
				{' '}
                <a href={`mailto:${email}`}>
                  {email}
                </a>
				</p>
			</div>
			<div className="col-2">
				<h4>Contact Us</h4>
				<ul>
					<li> - Dubai, UAE</li>
					<li> - Vanlose, Denmark</li>
					<li> - London, UK</li>
					<li> - Kochi, India</li>
				</ul>
			</div>
			<div className="col-3 social">
				<h4>Connect with us</h4>	
				
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                  />
                </a>
                <a title="youtube" href="https://vimeo.com">
                  <img
                    src={youtube}
                    alt="youtube"
                  />
                </a>
			</div>
		</div>
    
      </div>
    </div>
  </div>
  
);


export default  Footer

