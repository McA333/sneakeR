import React from 'react';

const SneakeR = ({img, title, price, caption}) => {
  return (
    <div className="SneakeR"> 
        <img className="SneakeR_image" src={img} alt={title} />
        <h2 className="SneakeR-title">{title}</h2>
        <h3 className="SneaheR-price">{price}</h3>
        <p className="SneakeR-caption">{caption}</p>
    </div>
  );
}

export default SneakeR;