import { faMagnifyingGlass, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div>
      <header className="flex h-14 items-center justify-between bg-slate-950 px-8 text-white">
        <div className="flex items-center gap-1">
          <img src="./netflix.png" className="w-16 sm:w-28" />
          <a href="#">Phim</a>
          <a href="#">Truyền hình</a>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </div>
      </header>
      <div className="relative text-white">
        <img
          className="aspect-video brightness-50"
          src="https://4kwallpapers.com/images/walls/thumbs_3t/17087.jpg"
        ></img>
        <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
          <p className="font-bold sm:text-[2vw]">Inside Out 2</p>
          <div>
            <p>PG13</p>
            <p>2025-02-21</p>
          </div>
          <div>
            <div className="hidden sm:block">
              <p>Overview</p>
              <p>
                Teenager Riley&apos;s mind headquarters is undergoing a sudden
                demolition to make room for something entirely unexpected: new
                Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long
                been running a successful operation by all accounts, aren’t sure
                how to feel when Anxiety shows up. And it looks like she’s not
                alone.
              </p>
            </div>
          </div>
          <div>
            <button>
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
            <button>View Detail</button>
          </div>
        </div>
      </div>
      <div>
        <ul>
          <li className="h-0.5 w-4 cursor-pointer bg-slate-600"></li>
          <li className="h-0.5 w-4 cursor-pointer bg-slate-600"></li>
          <li className="h-0.5 w-4 cursor-pointer bg-slate-600"></li>
          <li className="h-0.5 w-4 cursor-pointer bg-slate-600"></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
