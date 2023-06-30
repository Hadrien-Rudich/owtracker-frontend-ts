import { MouseEvent, ChangeEvent, KeyboardEvent, useState } from 'react';
import { ImCross } from 'react-icons/im';
import { RiEditFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import { profileStore } from '../../store/profileStore';
import { deleteProfileFromApi } from '../../services/ApiService';
import { authStore } from '../../store/authStore';

function Profile() {
  const {
    profilesData,
    profile,
    setProfile,
    deleteProfile,
    clearProfile,
    newProfileLabel,
    setNewProfileLabel,
    clearNewProfileLabel,
  } = profileStore();

  const [profileLabelInputField, setProfileLabelInputField] = useState(false);

  const { userData } = authStore();

  const handleClick = (
    event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLInputElement>
  ) => {
    if (profile === event.currentTarget.value) {
      clearProfile();
    } else {
      const selectedProfile = event.currentTarget.value;
      setProfile(selectedProfile);
      setNewProfileLabel(selectedProfile);
    }
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewProfileLabel(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setProfileLabelInputField(false);
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

  const handleEditClick = () => {
    setProfileLabelInputField(!profileLabelInputField);
  };

  return (
    <div className="Profile_container flex flex-col gap-4 ">
      {profilesData.map((p) => (
        <div
          className="profile_container flex ml-8 gap-2 relative"
          key={p.label}
        >
          {profileLabelInputField &&
          p.label.toLowerCase() === profile.toLowerCase() ? (
            <div className="flexdiv row gap-6">
              <input
                type="text"
                key={p.id}
                value={newProfileLabel}
                disabled={false}
                required={false}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                className={`${
                  p.label.toLowerCase() === profile.toLowerCase()
                    ? 'scale-110 bg-activeColor shadow-lg'
                    : 'bg-activeGrayColor shadow-inner opacity-60 hover:opacity-100'
                } profilecard_container profile card hover:bg-activeColor hover:scale-110`}
              />
              <div className="flexdiv row gap-2">
                <button type="button" className="text-validate hover:scale-125">
                  <FaCheck className="sign h-5 w-5" />
                </button>
                <button type="button" className="text-warning hover:scale-125">
                  <ImCross className="sign h-[0.9rem] w-[0.9rem]" />
                </button>
              </div>
            </div>
          ) : (
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
          )}

          {p.label.toLowerCase() === profile.toLowerCase() &&
            !profileLabelInputField && (
              <div className="button_container">
                <button
                  value={p.label}
                  onClick={handleDeleteClick}
                  type="button"
                  className=" absolute text-warning hover:scale-125 top-3 right-[-0.2rem]"
                >
                  <ImCross className="sign h-[0.9rem] w-[0.9rem]" />
                </button>
                <button
                  type="button"
                  className="absolute top-[0.65rem] left-0"
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
