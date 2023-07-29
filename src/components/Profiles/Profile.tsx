import { MouseEvent } from 'react';
import { RiEditFill } from 'react-icons/ri';
import { FaTrashAlt } from 'react-icons/fa';

import { profileStore } from '../../store/profileStore';
import { deleteProfileFromApi } from '../../services/ApiService';
import { authStore } from '../../store/authStore';
import UpdateProfile from './UpdateProfile';
import type { ProfileData } from '../../types/store/profileTypes';

function Profile() {
  const {
    profilesData,
    profileData,
    setProfileData,
    clearProfileData,
    deleteProfile,
    setNewProfileLabel,
    isUpdatingProfile,
    setIsUpdatingProfile,
    setUpdatedProfileLabel,
  } = profileStore();

  const { userData } = authStore();

  const handleProfileClick = (
    event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLInputElement>,
    profileObj: ProfileData
  ) => {
    const selectedProfile = event.currentTarget.value;

    if (isUpdatingProfile) {
      return;
    }

    if (profileData.label === selectedProfile) {
      clearProfileData();
    } else {
      setProfileData(profileObj);
      setNewProfileLabel(profileObj.label);
    }
  };

  const handleDeleteClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const label = event.currentTarget.value;
    const foundProfile = profilesData.find(
      (p) => p.label === label && userData.id === p.userId
    );
    if (foundProfile) {
      await deleteProfileFromApi(userData.id, foundProfile.id);
      deleteProfile(foundProfile.label); //
    }
  };

  const handleEditClick = (event: MouseEvent<HTMLButtonElement>) => {
    setUpdatedProfileLabel(event.currentTarget.value);
    setIsUpdatingProfile(true);
  };

  return (
    <div className="Profile_container flex flex-col gap-4 ">
      {profilesData.map((p) => (
        <div
          className="profile_container flex ml-8 gap-2 relative"
          key={p.label}
        >
          {isUpdatingProfile && p.label === profileData.label ? (
            <UpdateProfile p={p} />
          ) : (
            <button
              key={p.label}
              value={p.label}
              onClick={(event) =>
                handleProfileClick(event, {
                  id: p.id,
                  label: p.label,
                  userId: p.userId,
                })
              }
              type="button"
              disabled={isUpdatingProfile}
              className={`${
                // eslint-disable-next-line no-nested-ternary
                p.label === profileData.label
                  ? 'selected'
                  : isUpdatingProfile
                  ? 'disabled'
                  : 'active'
              } profilecard_container profile card`}
            >
              {p.label}
            </button>
          )}

          {p.label === profileData.label && !isUpdatingProfile && (
            <div className="button_container">
              <button
                value={p.label}
                onClick={handleDeleteClick}
                type="button"
                className=" absolute text-warning hover:scale-125 top-3 right-[-0.2rem]"
              >
                <FaTrashAlt className="sign h-[1rem] w-[1rem]" />
              </button>
              <button
                type="button"
                className="absolute top-[0.65rem] left-0"
                value={p.label}
                onClick={handleEditClick}
              >
                <RiEditFill className="sign h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Profile;
