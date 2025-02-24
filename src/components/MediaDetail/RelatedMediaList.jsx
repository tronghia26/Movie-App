import MovieCart from '@components/MovieCart';

const RelatedMediaList = ({ mediaList = [] }) => {
  return (
    <div className="mt-6">
      <p className="mb-4 text-[1.4vw] font-bold">More like this</p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {mediaList.map((media) => {
          return (
            <MovieCart
              key={media.id}
              id={media.id}
              title={media.title}
              releaseDate={media.release_date}
              poster={media.poster_path}
              point={media.vote_average}
              mediaType={media.media_type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedMediaList;
