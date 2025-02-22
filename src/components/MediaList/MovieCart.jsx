import CircularProgressbar from './CircularProgressbar';

const MovieCart = () => {
  return (
    <div className="rounded-lg border border-slate-800">
      <img
        className="rounded-lg"
        src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
      />
      <div className="relative -top-[1.5vw] px-4">
        <CircularProgressbar />
        <p className="mt-2 font-bold">Kingdom of ...</p>
        <p className="text-slate-300">time</p>
      </div>
    </div>
  );
};

export default MovieCart;
