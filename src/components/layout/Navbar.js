import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-light'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <div className='btn-group'>
        <a class='btn dropdown-toggle' data-toggle='dropdown' href='#'>
          Favorites
          <span className='caret'>0</span>
        </a>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
