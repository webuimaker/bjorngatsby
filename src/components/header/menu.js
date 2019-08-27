import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';


const Menu = (props) => {
  const { menuLinks } = props.menuLinks;
  //const labels = props.menuLinks
  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu