import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '@components/Loading';
import Banner from '@components/MediaDetail/Banner';
import ActorList from '@components/MediaDetail/ActorList';
import RelatedMediaList from '@/components/MediaDetail/RelatedMediaList';

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits `,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjllYWFlMTc2MjUwNDFjOWE4YzM3OTEwYmIyYzdhZiIsIm5iZiI6MTc0MDAzNzQ2MS43MTYsInN1YiI6IjY3YjZkZDU1MTFmZjAzNDA5ZWMzZTUzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ncHlurb-7UmAF67ZSSRZZLcfwqBXxD6jN_kkX_GsPXU',
        },
      },
    )
      .then(async (res) => {
        const data = await res.json();
        // console.log(data);
        setMovieInfo(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <RelatedMediaList />
          </div>
          <div className="flex-1">
            <p>infomation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
