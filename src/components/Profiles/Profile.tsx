import { useEffect, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { authStore } from '../../store/authStore';
import { profileStore } from '../../store/profileStore';

import {
  fetchProfilesData,
  deleteProfileFromDb,
} from '../../services/ApiService';

function Profile() {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore();
  const {
    addProfilesData,
    profilesData,
    profile,
    setProfile,
    newProfile,
    deleteProfile,
    clearProfile,
  } = profileStore();

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

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (profile === event.currentTarget.value) {
      clearProfile();
    } else {
      const selectedProfile = event.currentTarget.value;
      setProfile(selectedProfile);
    }
  };

  const handleDeleteClick = (event: MouseEvent<HTMLButtonElement>) => {
    deleteProfileFromDb(event.currentTarget.value);
    deleteProfile(event.currentTarget.value);
  };

  return (
    <div className="Profile_container flex flex-col gap-4">
      {profilesData.map((p) => (
        <div className="profile_container flex ml-8 gap-4" key={p.label}>
          <button
            key={p.id}
            value={p.label.toLowerCase()}
            onClick={handleClick}
            type="button"
            className={`${
              p.label.toLowerCase() === profile.toLowerCase()
                ? 'scale-110 bg-activeColor shadow-lg'
                : 'bg-activeGrayColor shadow-inner opacity-60 hover:opacity-100'
            } profilecard_container profile card hover:bg-activeColor hover:scale-110`}
          >
            {p.label}
          </button>
          {p.label.toLowerCase() === profile.toLowerCase() && (
            <button
              value={p.label}
              onClick={handleDeleteClick}
              type="button"
              className="hover:scale-110"
            >
              <ImCross className="sign cancel" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Profile;
