import { ChangeEvent, KeyboardEvent, FormEvent } from 'react';
import { ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';
import { profileStore } from '../../store/profileStore';
import type { ProfileData } from '../../types/store/profileTypes';
import { updateProfileOnApi } from '../../services/ApiService';
import { authStore } from '../../store/authStore';
import { verifyProfileLabelAvailability } from '../../utils/utils';

function UpdateProfile({ p }: { p: ProfileData }) {
  const {
    profileData,
    profilesData,
    updatedProfileLabel,
    setUpdatedProfileLabel,
    setIsUpdatingProfile,
    updateProfileLabel,
    clearUpdatedProfileLabel,
  } = profileStore();

  const { userData } = authStore();

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      clearUpdatedProfileLabel();
      setIsUpdatingProfile(false);
    }
  };
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdatedProfileLabel(event.target.value);
    console.log(event.target.value);
  };

  const handleUpdateProfile = async () => {
    const profileLabelInUse = verifyProfileLabelAvailability(
      updatedProfileLabel,
      profilesData
    );

    if (profileLabelInUse) {
      console.log(`You already have a profile called ${updatedProfileLabel}`);
      return;
    }

    if (updatedProfileLabel === '') {
      console.log('Profile name cannot be empty');
      return;
    }

    try {
      await updateProfileOnApi(userData.id, p.id, updatedProfileLabel);
      updateProfileLabel(p.id, updatedProfileLabel);
      setIsUpdatingProfile(false);
    } catch (error) {
      console.log(error);
    }
    // }
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
          key={p.id}
          value={updatedProfileLabel}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          className={`${
            p.label === profileData.label
              ? 'scale-110 bg-activeColor shadow-lg'
              : 'bg-activeGrayColor shadow-inner opacity-60 hover:opacity-100'
          } profilecard_container profile card hover:bg-activeColor hover:scale-110`}
        />
      </form>
      <div className="button_container flexdiv row gap-2">
        <button
          type="button"
          onClick={handleUpdateProfile}
          className="text-validate hover:scale-125"
        >
          <FaCheck className="sign h-5 w-5" />
        </button>
        <button type="button" className="text-warning hover:scale-125">
          <ImCross
            onClick={handleCancel}
            className="sign h-[0.9rem] w-[0.9rem]"
          />
        </button>
      </div>
    </div>
  );
}

export default UpdateProfile;
