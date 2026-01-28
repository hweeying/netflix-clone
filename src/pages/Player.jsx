import React, {useEffect, useState} from 'react';

import backArrowIcon from '../assets/back_arrow_icon.png';
import {useNavigate, useParams} from 'react-router-dom';

const Player = () => {
  const {id} = useParams ();
  const navigate = useNavigate ();

  const [movieDetail, setMovieDetail] = useState ({
    name: '',
    key: '',
    published_at: '',
    type: '',
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTQ3YzVkZWNkM2FlZDk3YTE3ZTJjOTJiZDNjYTYwNCIsIm5iZiI6MTc2OTYxNDIzMC4xMTUsInN1YiI6IjY5N2EyYjk2NjQ1MzRkM2UxNGVmM2I5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EjhFTSczAGepFiG62FBAcdak3_94g4IQyz79T-E3IeA',
    },
  };

  useEffect (() => {
    fetch (
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then (res => res.json ())
      .then (res => setMovieDetail (res.results[0]))
      .catch (err => console.error (err));
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img
        src={backArrowIcon}
        className="absolute top-[20px] left-[20px] w-[50px] cursor-pointer"
        onClick={() => {
          navigate (-2);
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube/embed/${movieDetail.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
        className="rounded"
      />
      <div className="flex items-center justify-between w-[90%]">
        <p>{movieDetail.published_at}</p>
        <p>{movieDetail.name}</p>
        <p>{movieDetail.type}</p>
      </div>
    </div>
  );
};

export default Player;
