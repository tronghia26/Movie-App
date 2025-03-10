import Loading from '@components/Loading';
import MovieCart from '@components/MovieCart';

const RelatedMediaList = ({ mediaList = [], isLoading, title, className }) => {
  return (
    <div className={className}>
      {title && <p className="mb-4 text-[1.4vw] font-bold">{title}</p>}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
          {mediaList.map((media, index) => {
            return (
              <MovieCart
                key={`${media.id}-${index}`} // Kết hợp id với index để đảm bảo key duy nhất
                id={media.id}
                title={media.title || media.name}
                releaseDate={media.release_date || media.first_air_date}
                poster={media.poster_path}
                point={media.vote_average}
                mediaType={media.media_type || media.type}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RelatedMediaList;
