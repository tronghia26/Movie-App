import { useEffect, useState } from 'react';
import MovieCart from './MovieCart';

const MediaList = ({ title, tabs }) => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);
  useEffect(() => {
    const url = tabs.find((tab) => tab.id === activeTabId)?.url;
    if (url) {
      fetch(url, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjllYWFlMTc2MjUwNDFjOWE4YzM3OTEwYmIyYzdhZiIsIm5iZiI6MTc0MDAzNzQ2MS43MTYsInN1YiI6IjY3YjZkZDU1MTFmZjAzNDA5ZWMzZTUzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ncHlurb-7UmAF67ZSSRZZLcfwqBXxD6jN_kkX_GsPXU',
        },
      }).then(async (res) => {
        const data = await res.json();
        console.log(data);
        const trendMediaList = data.results.slice(0, 12);
        setMediaList(trendMediaList);
      });
    }
  }, [activeTabId, tabs]);
  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="rouned flex rounded border border-white">
          {tabs.map((tab) => {
            return (
              <li
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`cursor-pointer rounded px-2 py-1 ${activeTabId === tab.id ? 'bg-white text-black' : 'text-white'}`}
              >
                {tab.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
        {mediaList.map((media) => {
          return (
            <MovieCart
              id={media.id}
              key={media.id}
              title={media.title || media.name}
              releaseDate={media.release_date || media.first_air_date}
              poster={media.poster_path}
              point={media.vote_average}
              mediaType={media.media_type || activeTabId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MediaList;
