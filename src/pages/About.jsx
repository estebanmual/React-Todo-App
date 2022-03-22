import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const url = location.pathname;
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>
    </div>
  );
};
export default About;
