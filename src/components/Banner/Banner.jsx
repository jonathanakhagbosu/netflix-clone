import { Button } from "@mui/material";
import { ErrorOutline, PlayArrow } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, requests } from "../../requests";
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        `${BASE_URL}${requests.fetchNetflixOriginals}`
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {" "}
          {movie?.title || movie?.original_name}{" "}
        </h1>
        <p className="banner__description">{truncate(movie.overview, 200)}</p>
        <div className="banner__buttons">
          <Button
            startIcon={<PlayArrow className="icons" />}
            variant="contained"
            className="banner__button"
          >
            Play
          </Button>
          <Button
            startIcon={<ErrorOutline className="icons" />}
            variant="contained"
            className="banner__button"
          >
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
