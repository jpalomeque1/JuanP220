// eslint-disable-next-line no-unused-vars
'use client';

import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import Dropdown from './Dropdown/Dropdown';

const Navbar = ({ options }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!options) {
    return null;
  }

  return (
    <nav className="navbar" data-testid="nav">
      {isMobile ? (
        <Dropdown options={options} />
      ) : (
        <ul data-testid="ul">
          {options.map((option, index) => (
            <li key={index} data-testid={`li${index}`}>
              <a href={option.path} className="link" data-testid={`a${index}`}>
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
