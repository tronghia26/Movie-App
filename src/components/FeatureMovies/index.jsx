/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Movie from './Movie';
import PaginateIndicator from './PaginateIndicator';
import useFetch from '@hooks/useFetch';

const FeatureMovies = () => {
  // const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  const { data: popularMoviesResponse } = useFetch({
    // url: `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc/include_video=true`,
    url: `/movie/popular`,
  });

  const { data: videoResponse } = useFetch(
    {
      url: `/movie/${activeMovieId}/videos`,
    },
    { enabled: !!activeMovieId }, //nếu activeMovieId có giá trị thì enabled true
  );

  const movies = (popularMoviesResponse.results || []).slice(3, 7);
  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0].id);
    }
  }, [JSON.stringify(movies)]);

  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => {
          return (
            <Movie
              key={movie.id}
              data={movie}
              trailerVideoKey={
                (videoResponse?.results || []).find(
                  (video) =>
                    video.type === 'Trailer' && video.site === 'YouTube',
                )?.key
              }
            />
          );
        })}
      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};

export default FeatureMovies;
