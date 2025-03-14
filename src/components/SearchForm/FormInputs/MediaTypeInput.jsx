const MediaTypeInput = ({ onChange, name, value }) => {
  return (
    <div className="accent-black">
      <div>
        <input
          type="radio"
          name={name}
          value="movie"
          onChange={onChange}
          checked={value === 'movie'}
          id="sf-type-movie"
          className="mr-1"
        />
        <label htmlFor="sf-type-movie">Movie</label>
      </div>
      <div>
        <input
          type="radio"
          name={name}
          value="tv"
          onChange={onChange}
          checked={value === 'tv'}
          id="sf-type-tv"
          className="mr-1"
        />
        <label htmlFor="sf-type-tv">TV Show</label>
      </div>
    </div>
  );
};

export default MediaTypeInput;
