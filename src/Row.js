import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

function Row({title, fetchUrl}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className='row'>
      <h2>{title}</h2>

      {/* Container -> Posters */}
    </div>
  )
}

export default Row;
