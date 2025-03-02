import RelatedMediaList from '@components/MediaDetail/RelatedMediaList';
import SearchForm from '@components/SearchForm';
import useFetch from '@hooks/useFetch';
import { useState } from 'react';

const SearchPage = () => {
  const [searchFormValues, setSearchFormValues] = useState({
    defaultValues: {
      mediaType: 'movie',
      genres: [],
      rating: 'All',
    },
  });
  const [minRating, maxRating] =
    searchFormValues.rating === 'All'
      ? [0, 100]
      : searchFormValues.rating?.split(' - ') || [0, 100];

  const { data } = useFetch({
    url: searchFormValues.mediaType
      ? `/discover/${searchFormValues.mediaType}?sort_by=popularity.desc?with_genres=${searchFormValues.genres?.join(',') || ''}&vote_average.gte=${minRating / 10}&vote_average.lte=${maxRating / 10}`
      : null,
  });

  console.log(data);
  return (
    <div className="container flex-col">
      <p className="text-2xlfont-bold">Search Page</p>
      <div className="flex gap-6">
        <div className="flex-1">
          <SearchForm setSearchFormValues={setSearchFormValues} />
        </div>
        <div className="flex-[3]">
          <RelatedMediaList mediaList={data.results || []} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
