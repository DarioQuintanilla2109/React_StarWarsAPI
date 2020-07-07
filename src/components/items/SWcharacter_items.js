import React from 'react';
import PropTypes from 'prop-types';

const SWcharacter_items = ({
  character: { name, gender, hair_color, eye_color, login },
}) => {
  return (
    <div className='card text-center'>
      <img src='swPic.jpg' style={{ width: '200px', height: '200px' }} />
      <h2>{name}</h2>
      <h5>Gender: {gender}</h5>
      <h5>Hair Color: {hair_color}</h5>
      <h5>Eye Color: {eye_color}</h5>
      <h6>login: {login}</h6>
      <div>
        <a href='#' className='btn btn-dark-sm my-1'>
          Learn More
        </a>
        <a href='#' className='btn btn-dark-sm my-1 '>
          <i className='far fa-heart'></i>
        </a>
      </div>
    </div>
  );
};

//check for prop types

export default SWcharacter_items;
