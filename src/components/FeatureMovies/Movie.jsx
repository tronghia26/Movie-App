import ImageComponent from '@components/ImageComponent';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Movie = (props) => {
  if (!props.data) {
    return <div>No movie data available</div>;
  }
  // console.log({ props });
  const {
    data: { backdrop_path, title, release_date, overview },
  } = props;
  return (
    <div>
      <ImageComponent
        className="aspect-video brightness-50"
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        width={900}
        height={500}
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{title}</p>
        <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">{release_date}</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>{overview}</p>
          </div>
        </div>
        <div className="mt-4">
          <button className="mr-2 rounded bg-white px-4 py-2 text-[10px] text-black lg:text-lg">
            <FontAwesomeIcon icon={faPlay} />
            Trailer
          </button>
          <button className="rounded bg-slate-300/35 px-4 py-2 text-[10px] text-white lg:text-lg">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
