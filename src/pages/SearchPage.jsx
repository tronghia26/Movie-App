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
  const { data } = useFetch({
    url: `/discover/${searchFormValues.mediaType}`,
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
