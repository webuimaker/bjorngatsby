import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import t1 from '../images/thumb1.jpg';
import t2 from '../images/thumb2.jpg';
import t3 from '../images/thumb3.jpg';
import t4 from '../images/thumb4.jpg';

const RecentNews = props => (

  <div className="newslist p-5">
	<div className="row ">
		<div className="col-12 ">
			<h1 className="titlenew">Latest News</h1>
			
		</div>
		</div>
		<div className="row list">
				<div className="col-2">
					<div className="date">April 9, 2019</div>
					<span className="badge">COMMENTARY</span>
				
				</div>
				<div className="col-5">
					<h2>Open questions about Generative Adversarial Networks</h2>
					<p>What we'd like to find GANs that we don't know yet.</p>
				</div>
				<div className="col-5">
					<ul className="image-list">
						<li>
							<img alt="thumb1" src={t1} />
						</li>
						<li>
							<img alt="thumb1" src={t2} />
						</li>
						<li>
							<img alt="thumb1" src={t3} />
						</li>
						<li>
							<img alt="thumb1" src={t4} />
						</li>
					</ul>
				
				</div>
			</div>	<div className="row list">
				<div className="col-2">
					<div className="date">April 9, 2019</div>
					<span className="badge">COMMENTARY</span>
				
				</div>
				<div className="col-5">
					<h2>Open questions about Generative Adversarial Networks</h2>
					<p>What we'd like to find GANs that we don't know yet.</p>
				</div>
				<div className="col-5">
					<ul className="image-list">
						<li>
							<img alt="thumb1" src={t1} />
						</li>
						<li>
							<img alt="thumb1" src={t2} />
						</li>
						<li>
							<img alt="thumb1" src={t3} />
						</li>
						<li>
							<img alt="thumb1" src={t4} />
						</li>
					</ul>
				
				</div>
			</div>	<div className="row list">
				<div className="col-2">
					<div className="date">April 9, 2019</div>
					<span className="badge">COMMENTARY</span>
				
				</div>
				<div className="col-5">
					<h2>Open questions about Generative Adversarial Networks</h2>
					<p>What we'd like to find GANs that we don't know yet.</p>
				</div>
				<div className="col-5">
					<ul className="image-list">
					<li>
							<img alt="thumb1" src={t1} />
						</li>
						<li>
							<img alt="thumb1" src={t2} />
						</li>
						<li>
							<img alt="thumb1" src={t3} />
						</li>
						<li>
							<img alt="thumb1" src={t4} />
						</li>
					</ul>
				
				</div>
			</div>		

			
		
	</div>
);

export default  RecentNews
