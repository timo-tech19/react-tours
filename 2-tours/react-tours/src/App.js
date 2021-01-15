import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const getTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(() => {
    getTours();
  }, []);

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
     
  }

  return  (
    <main>
      <Tours removeTour={removeTour} tours={tours}  getTours={getTours}/>
    </main>
  )
}

export default App
