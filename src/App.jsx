import Header from './components/Header';
import FeatureMovies from './components/FeatureMovies/index.jsx';
import MediaList from './components/MediaList/index.jsx';
import { TRENDING_TABS, TOP_RATED_TABS } from './libs/constant.js';

function App() {
  return (
    <div>
      <Header />
      <FeatureMovies />
      <MediaList title="Trending" tabs={TRENDING_TABS} />
      <MediaList title="Top Rated" tabs={TOP_RATED_TABS} />
    </div>
  );
}

export default App;
