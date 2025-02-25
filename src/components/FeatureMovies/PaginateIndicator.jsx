const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  return (
    <div className="absolute right-8 bottom-[10%]">
      <ul className="flex gap-1">
        {movies.map((movie) => {
          return (
            <li
              key={movie.id}
              onClick={() => setActiveMovieId(movie.id)}
              className={`cursor-pointe h-1 w-6 ${movie.id === activeMovieId ? 'bg-slate-100' : 'bg-slate-600'}`}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default PaginateIndicator;
