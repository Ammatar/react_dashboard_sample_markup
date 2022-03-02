import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className='cards-item'>
      <h3>{title}</h3>
      <div>{content}</div>
    </div>
  );
};

export default Card;
