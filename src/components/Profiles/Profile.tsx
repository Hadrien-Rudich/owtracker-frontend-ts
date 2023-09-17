import { MouseEvent } from 'react';
import { profileStore } from '../../store/profileStore';
import UpdateProfile from './UpdateProfile';
import type { ProfileData } from '../../types/store/profileTypes';
import DeleteProfile from './DeleteProfile';
import EditProfile from './EditProfile';

function Profile() {
  const {
    profilesData,
    profileData,
    setProfileData,
    clearProfileData,
    setNewProfileLabel,
    isUpdatingProfile,
  } = profileStore();

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

  return (
    <div className="Profile_container flex flex-col gap-4 ">
      {profilesData.map((p) => (
        <div
          className="profile_container flex ml-8 gap-2 relative"
          key={p.label}
        >
          {isUpdatingProfile && p.label === profileData.label ? (
            <UpdateProfile profileObj={p} />
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
              <DeleteProfile profileObj={p} />
              <EditProfile profileObj={p} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Profile;
