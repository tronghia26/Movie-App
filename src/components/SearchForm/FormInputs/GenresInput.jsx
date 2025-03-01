import useFetch from '@hooks/useFetch';
import { useWatch } from 'react-hook-form';

const GenresInput = ({ control, onChange, value = [] }) => {
  const mediaType = useWatch({ name: 'mediaType', control });
  // console.log(mediaType);
  const { data } = useFetch(
    { url: `/genre/${mediaType}/list` },
    { enabled: mediaType },
  );
  // console.log(data);
  return (
    <div className="flex flex-wrap gap-1">
      {(data.genres || []).map((genre) => {
        return (
          <p
            key={genre.id}
            className={`cursor-pointer rounded-lg border px-2 py-1 ${value.includes(genre.id) ? 'bg-black text-white' : ''}`}
            onClick={() => {
              let newValue = [...value];
              if (value.includes(genre.id)) {
                newValue = value.filter((g) => g !== genre.id);
              } else {
                newValue = [...newValue, genre.id];
              }
              onChange(newValue);
            }}
          >
            {genre.name}
          </p>
        );
      })}
    </div>
  );
};

export default GenresInput;
