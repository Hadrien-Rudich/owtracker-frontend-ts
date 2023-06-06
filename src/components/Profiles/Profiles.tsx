import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authStore } from '../../store/authStore';
import { profileStore } from '../../store/profileStore';
import AddProfile from './AddProfile';
import Profile from './Profile';

import { fetchProfilesData } from '../../services/ApiService';

function Profiles() {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore();
  const { profile, profilesData, addProfilesData, newProfile } = profileStore();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    async function getProfilesData() {
      try {
        const data = await fetchProfilesData();
        addProfilesData(data);
      } catch (error) {
        console.error('Failed to fetch history data', error);
      }
    }

    getProfilesData();
  }, [addProfilesData, newProfile]);

  return (
    <div className="Profiles_container flexdiv col lg:mt-[8.5rem] my-24 relative">
      {profile === '' && (
        <div className="title_container profileheader flexdiv">
          <h3 className="">
            {profilesData.length === 0
              ? 'CREATE A PROFILE'
              : 'SELECT A PROFILE'}
          </h3>
        </div>
      )}
      <div className="containerbox">
        <div className="-mt-2">
          <AddProfile />
        </div>
        <div className="w-52 flex flex-col gap-4">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Profiles;
