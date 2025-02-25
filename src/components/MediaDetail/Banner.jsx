import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { groupBy } from 'lodash';
import CircularProgressbar from '../CircularProgressbar';
import ImageComponent from '@components/ImageComponent';

const Banner = ({ mediaInfo }) => {
  const certification = (mediaInfo.release_dates?.results || []).find(
    (result) => result.iso_3166_1 === 'US',
  )?.release_dates?.[0]?.certification;

  const crews = (mediaInfo.credits?.crew || [])
    .filter((crew) => ['Director', 'Screenplay', 'Writer'].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  const groupedCrews = groupBy(crews, 'job');
  // console.log(groupedCrews);
  return (
    <div className="relative overflow-hidden text-white shadow-sm shadow-slate-800">
      <img
        className="absolute inset-0 w-full brightness-[.2]"
        src={`https://image.tmdb.org/t/p/original${mediaInfo.backdrop_path}`}
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
        <div className="flex-1">
          <ImageComponent
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${mediaInfo.poster_path}`}
            width={600}
            height={900}
          />

          {/* <img
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${mediaInfo.poster_path}`}
            width={600}
            height={900}
          /> */}
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{mediaInfo.title}</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certification}
            </span>
            <p>{mediaInfo.release_date}</p>
            <p>
              {(mediaInfo.genres || []).map((genre) => genre.name).join(', ')}
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressbar
                percent={Math.round((mediaInfo.vote_average || 0) * 10)}
                size={3.5}
                strokeWidth={0.3}
              />
              Rating
            </div>
            <button>
              <FontAwesomeIcon icon={faPlay} className="mr-1" /> Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>{mediaInfo.overview}</p>
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
            {/* <div>
              <p className="font-bold">Director</p>
              <p>Jennifer Phang</p>
            </div>
            <div>
              <p className="font-bold">Writter</p>
              <p>Dan Fry, Rusel</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
