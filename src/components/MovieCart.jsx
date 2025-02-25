import CircularProgressbar from './CircularProgressbar.jsx';
import { Link } from 'react-router-dom';
import ImageComponent from './ImageComponent.jsx';

const MovieCart = ({ id, title, releaseDate, poster, point, mediaType }) => {
  return (
    <Link className="rounded-lg border border-slate-800" to={`/movie/${id}`}>
      <div className="relative">
        {mediaType === 'tv' && (
          <p className="absolute top-1 right-1 rounded bg-black p-4 text-[10px] font-bold text-white shadow-md sm:text-[12px] lg:text-sm">
            TV Show
          </p>
        )}
        <ImageComponent
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          width={210}
          height={300}
          className="w-full rounded-lg"
        />
        {/* <img
          className="w-full rounded-lg"
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          width={210}
          height={300}
        /> */}
        <div className="relative -top-[1.5vw] px-4">
          <CircularProgressbar
            percent={Math.round(point * 10)}
            strokeColor={point >= 7 ? 'green' : point >= 5 ? 'orange' : 'red'}
          />
          <p className="mt-2 font-bold">{title}</p>
          <p className="text-slate-300">{releaseDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCart;
