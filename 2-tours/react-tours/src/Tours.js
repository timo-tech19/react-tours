import React from 'react';
import Tour from './Tour';


const Tours = ({tours, removeTour, getTours}) => {
  return <section>
    <div className="title">
      <h2>Our Tours</h2>
      <div className="underline"></div>
    </div>
    <div>
      {
        tours.length === 0 ? <button className='btn' onClick={getTours}>Refresh</button> : tours.map(tour => {
          return <Tour removeTour={removeTour} key={tour.id} {...tour} />
        })
      }
    </div>
  </section>;
};

export default Tours;
