import ImageComponent from '@components/ImageComponent';
import { Link } from 'react-router-dom';

const ActorInfo = ({ id, name, character, profilePath, episodeCount }) => {
  return (
    <Link
      to={`/people/${id}`}
      className="rounded-lg border border-slate-300 bg-black shadow-sm"
    >
      <ImageComponent
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`
            : '/ActorNoImage.svg'
        }
        width={276}
        height={350}
        className="rounded-lg"
      />

      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        <p>
          {episodeCount
            ? `${episodeCount} Episode${episodeCount > 1 ? 's' : ''}`
            : ''}
        </p>

        {/* <p>21 episodes</p> */}
      </div>
    </Link>
  );
};

export default ActorInfo;
