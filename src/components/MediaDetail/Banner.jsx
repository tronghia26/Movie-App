import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { groupBy } from 'lodash';
import CircularProgressbar from '../CircularProgressbar';
import ImageComponent from '@components/ImageComponent';
import { useModalContext } from '@context/ModalProvider';

const Banner = ({
  backdrop_path,
  poster_path,
  title,
  certification,
  crews,
  release_date,
  genres,
  point = 0,
  overview,
  trailerVideoKey,
}) => {
  const { openPopup } = useModalContext();

  if (!title) return null;
  const groupedCrews = groupBy(crews, 'job');
  // console.log(groupedCrews);
  return (
    <div className="relative overflow-hidden bg-black text-white shadow-sm shadow-slate-800">
      <ImageComponent
        width={1200}
        height={800}
        className="absolute inset-0 aspect-video w-full brightness-[.2]"
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      />
      <div className="container">
        <div className="flex-1">
          <ImageComponent
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`}
            width={600}
            height={900}
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{title}</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certification}
            </span>
            <p>{release_date}</p>
            <p>{(genres || []).map((genre) => genre.name).join(', ')}</p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressbar
                percent={Math.round((point || 0) * 10)}
                size={3.5}
                strokeWidth={0.3}
              />
              Rating
            </div>
            <button
              onClick={() => {
                openPopup(
                  <iframe
                    title="Trailer"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                    className="aspect-video w-[50vw]"
                  ></iframe>,
                );
              }}
            >
              <FontAwesomeIcon icon={faPlay} className="mr-1" /> Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-8">
            {Object.keys(groupedCrews).map((job) => {
              return (
                <div key={job}>
                  <p className="font-bold">{job}</p>
                  <p>{groupedCrews[job].map((crew) => crew.name).join(', ')}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
