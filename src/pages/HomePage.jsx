import FeatureMovies from '../components/FeatureMovies/index.jsx';
import MediaList from '../components/MediaList/index.jsx';
import { TRENDING_TABS, TOP_RATED_TABS } from '../libs/constant.js';

function HomePage() {
  return (
    <div>
      <FeatureMovies />
      <MediaList title="Trending" tabs={TRENDING_TABS} />
      <MediaList title="Top Rated" tabs={TOP_RATED_TABS} />
    </div>
  );
}

export default HomePage;
