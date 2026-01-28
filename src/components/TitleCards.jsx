import React, {useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom';

const TitleCards = ({title, category}) => {
  const cardsRef = useRef ();
  const [apiData, setApiData] = useState ([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTQ3YzVkZWNkM2FlZDk3YTE3ZTJjOTJiZDNjYTYwNCIsIm5iZiI6MTc2OTYxNDIzMC4xMTUsInN1YiI6IjY5N2EyYjk2NjQ1MzRkM2UxNGVmM2I5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EjhFTSczAGepFiG62FBAcdak3_94g4IQyz79T-E3IeA',
    },
  };

  const handleWheel = event => {
    event.preventDefault ();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect (() => {
    fetch (
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      options
    )
      .then (res => res.json ())
      .then (res => setApiData (res.results))
      .catch (err => console.error (err));

    const el = cardsRef.current;
    if (!el) return;

    el.addEventListener ('wheel', handleWheel);

    return () => {
      el.removeEventListener ('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="mt-12 mb-10">
      <h2 className="mb-2 font-bold">{title ? title : 'Popular on Netflix'}</h2>

      {apiData.length <= 0
        ? <div />
        : <div
            className="flex gap-2 overflow-x-scroll scrollbar-hide"
            ref={cardsRef}
          >
            {apiData.map (card => (
              <Link
                to={`/player/${card.id}`}
                key={card.id}
                className="relative shrink-0"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                  alt={card.original_title}
                  className="w-[240px] rounded cursor-pointer"
                />
                <p className="absolute bottom-4 right-4">
                  {card.original_title}
                </p>
              </Link>
            ))}
          </div>}

    </div>
  );
};

export default TitleCards;
