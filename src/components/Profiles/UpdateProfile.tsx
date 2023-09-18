import { ChangeEvent, KeyboardEvent, FormEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';
import { profileStore } from '../../store/profileStore';
import type { ProfileData } from '../../types/store/profileTypes';
import {
  updateProfileOnApi,
  ProfileAddedtoApi,
} from '../../services/API/profiles';
import { verifyProfileLabelAvailability } from '../../utils/utils';

function UpdateProfile({ profileObj }: { profileObj: ProfileData }) {
  const {
    selectedProfile: profileData,
    profilesData,
    updatedProfileLabel,
    setUpdatedProfileLabel,
    setIsUpdatingProfile,
    updateProfileLabel,
    clearUpdatedProfileLabel,
    selectProfile: setProfileData,
  } = profileStore();

  const mutation = useMutation({
    mutationFn: () =>
      updateProfileOnApi(profileObj.userId, profileObj.id, updatedProfileLabel),
    onSuccess: (updatedProfile: ProfileAddedtoApi) => {
      updateProfileLabel(profileObj.id, updatedProfileLabel);
      setIsUpdatingProfile(false);
      setProfileData(updatedProfile.profile);
    },
    retry: 1,
  });

  const handleUpdateProfile = async () => {
    const profileLabelIsAvailable = verifyProfileLabelAvailability(
      updatedProfileLabel,
      profilesData
    );
    if (profileLabelIsAvailable) {
      mutation.mutate();
    }
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      clearUpdatedProfileLabel();
      setIsUpdatingProfile(false);
    }
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdatedProfileLabel(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleUpdateProfile();
  };

  const handleCancel = () => {
    setIsUpdatingProfile(false);
  };

  return (
    <div className="flexdiv row gap-6">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          key={profileObj.id}
          value={updatedProfileLabel}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          className={`${
            profileObj.label === profileData.label
              ? 'scale-110 bg-activeColor shadow-lg'
              : 'bg-activeGrayColor shadow-inner opacity-60 hover:opacity-100'
          } profilecard_container profile card hover:bg-activeColor hover:scale-110`}
        />
      </form>
      <div className="button_container flexdiv row gap-2">
        <button
          type="button"
          onClick={handleCancel}
          className="text-warning hover:scale-125"
        >
          <ImCross className="sign h-[0.9rem] w-[0.9rem]" />
        </button>
        <button
          type="submit"
          onClick={handleUpdateProfile}
          className="text-validate hover:scale-125"
        >
          <FaCheck className="sign h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default UpdateProfile;
