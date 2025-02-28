import { useLoaderData } from 'react-router-dom';
import ImageComponent from './ImageComponent';
import RelatedMediaList from './MediaDetail/RelatedMediaList';

const GENDER = {
  0: 'Not set / not specified',
  1: 'Female',
  2: 'Male',
  3: 'Non-binary',
};

const PeoplePage = () => {
  const peopleInfo = useLoaderData();
  console.log(peopleInfo);
  return (
    <div className="bg-black text-white">
      <div className="container">
        <div className="flex-1">
          <ImageComponent
            src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${peopleInfo.profile_path}`}
            height={900}
            width={600}
            className="mb-6"
          />
          <p className="mb-6 font-bold">Personal Info</p>
          <div className="space-y-4">
            <div>
              <p className="font-bold">Known For</p>
              <p>{peopleInfo.known_for_department}</p>
            </div>
            <div>
              <p className="font-bold">Known Credits</p>
              <p>46</p>
            </div>
            <div>
              <p className="font-bold">Gender</p>
              <p>{GENDER[peopleInfo.gender]}</p>
            </div>
            <div>
              <p className="font-bold">Birthday</p>
              <p>{peopleInfo.birthday}</p>
            </div>
            <div>
              <p className="font-bold">Place of Birth</p>
              <p>{peopleInfo.place_of_birth}</p>
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <p className="font-bold">{peopleInfo.name}</p>
          <div>
            <p className="font-bold">Tiểu sử</p>
            <p className="whitespace-pre-line">{peopleInfo.biography}</p>
          </div>
          <RelatedMediaList
            mediaList={peopleInfo.combined_credits?.cast || []}
            title="Known For"
          />
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
