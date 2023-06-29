import { MouseEvent } from 'react';
import { ImCross } from 'react-icons/im';
import { profileStore } from '../../store/profileStore';

import { deleteProfileFromDb } from '../../services/ApiService';
import { authStore } from '../../store/authStore';

function Profile() {
  const { profilesData, profile, setProfile, deleteProfile, clearProfile } =
    profileStore();

  const { userData } = authStore();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (profile === event.currentTarget.value) {
      clearProfile();
    } else {
      const selectedProfile = event.currentTarget.value;
      setProfile(selectedProfile);
    }
  };

  const handleDeleteClick = (event: MouseEvent<HTMLButtonElement>) => {
    const label = event.currentTarget.value;
    const foundProfile = profilesData.find(
      (p) => p.label === label && userData.id === p.userId
    );
    if (foundProfile) {
      deleteProfileFromDb(foundProfile.id); // Delete profile from the database using the ID
      deleteProfile(profile); // Delete profile from the store using the label
    }
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
