import { useForm } from 'react-hook-form';
import FormField from './FormField';
import MediaTypeInput from './FormInputs/MediaTypeInput';
import GenresInput from './FormInputs/GenresInput';
import RatingInput from './FormInputs/RatingInput';
import { useEffect } from 'react';
const SearchForm = ({ setSearchFormValues }) => {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      mediaType: 'movie',
      genres: [],
      rating: 'All',
    },
  });
  const onSubmit = (data) => {
    console.log({ formData: data });
  };

  const formValues = watch();
  console.log(formValues);

  useEffect(() => {
    setSearchFormValues(formValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(formValues)]);

  return (
    <div className="rounded-lg border p-4 shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="mediaType"
          label="Media Type"
          control={control}
          Component={MediaTypeInput}
        />
        <FormField
          name="genres"
          label="Genres"
          control={control}
          Component={GenresInput}
        />
        <FormField
          name="rating"
          label="Rating   "
          control={control}
          Component={RatingInput}
        />
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default SearchForm;
