/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '@components/Loading';
import Banner from '@components/MediaDetail/Banner';
import ActorList from '@components/MediaDetail/ActorList';
import RelatedMediaList from '@/components/MediaDetail/RelatedMediaList';
import MovieInformation from '@components/MediaDetail/MovieInformation';
import useFetch from '@hooks/useFetch';

const MovieDetail = () => {
  const { id } = useParams();

  const { data: movieInfo, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits`,
    method: 'GET',
  });

  const {
    data: recommendationsResponse,
    isLoading: isRelatedMovieListLoading,
  } = useFetch({
    url: `/movie/${id}/recommendations`,
    method: 'GET',
  });
  const relatedMovies = (recommendationsResponse.results || []).slice(0, 12);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10 sm:gap-8">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <RelatedMediaList
              mediaList={relatedMovies}
              isLoading={isRelatedMovieListLoading}
            />
          </div>
          <div className="flex-1">
            <MovieInformation movieInfo={movieInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
