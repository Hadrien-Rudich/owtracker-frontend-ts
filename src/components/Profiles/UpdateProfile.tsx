import { ChangeEvent, KeyboardEvent, FormEvent } from 'react';
import { ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';
import { profileStore } from '../../store/profileStore';
import type { ProfileData } from '../../types/store/profileTypes';
import { verifyProfileLabelAvailability } from '../../utils/utils';
import useProfileUpdateMutation from '../../hooks/profiles/useProfileUpdateMutation';

function UpdateProfile({ profileObj }: { profileObj: ProfileData }) {
  const {
    selectedProfile,
    profilesData,
    updatedProfileLabel,
    setUpdatedProfileLabel,
    setIsUpdatingProfile,
    clearUpdatedProfileLabel,
  } = profileStore();

  const mutateProfile = useProfileUpdateMutation({ profileObj });

  const handleUpdateProfile = async () => {
    const profileLabelIsAvailable = verifyProfileLabelAvailability(
      updatedProfileLabel,
      profilesData
    );
    if (profileLabelIsAvailable) {
      mutateProfile();
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
        {profileObj.label === selectedProfile.label && (
          <button className=" bg-activeColor scale-110" type="button">
            <input
              type="text"
              key={profileObj.id}
              value={updatedProfileLabel}
              onChange={handleOnChange}
              onKeyDown={handleKeyDown}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              className="inputField component outline-altColor outline-offset-0"
            />
          </button>
        )}
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
