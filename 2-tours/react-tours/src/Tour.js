import React, { useState } from 'react';

const Tour = ({id, name, image, info, price, removeTour}) => {
  const [readMore, setReadMore] = useState(false);


  return <article className='single-tour'>
  <img src={image} alt={name}/>
  <footer>
    <div className="tour-info">
      <h4>{name}</h4>
      <h4 className='tour-price'>${price}</h4>
    </div>
    <p>{ readMore ? info : `${info.split(' ').slice(0, 30).join(' ')}...`}</p>
    <button onClick={() => setReadMore(!readMore)}>{readMore ? 'Show Less': 'Read More'}</button>
    <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
  </footer>
  </article>;
};

export default Tour;