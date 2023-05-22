/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./row.css";
import { BASE_URL } from "../../requests";
import axios from "axios";

const MOVIE_POSTER_URL = "https://image.tmdb.org/t/p/w220_and_h330_face";

const Row = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}${url}`);
      setMovies(response.data.results);
    };
    fetchData();
  }, [url]);

  return (
    <div className="row">
      <h2> {title} </h2>

      <div className="row__contents">
        {movies.map((movie) => (
          <img
            className="row__card"
            key={movie.id}
            src={`${MOVIE_POSTER_URL}${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
