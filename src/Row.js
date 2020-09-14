import React, { useState, useEffect } from 'react';
import './Row.css';

function Row({title}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div className='row'>
      <h2>{title}</h2>

      {/* Container -> Posters */}
    </div>
  )
}

export default Row;
