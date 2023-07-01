import { ChangeEvent, KeyboardEvent, FormEvent } from 'react';
import { ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';
import { profileStore } from '../../store/profileStore';
import type { ProfileData } from '../../types/store/profileTypes';
import { updateProfileOnApi } from '../../services/ApiService';
import { authStore } from '../../store/authStore';

function UpdateProfile({ p }: { p: ProfileData }) {
  const {
    profile,
    updatedProfileLabel,
    setUpdatedProfileLabel: setNewProfileLabel,
    toggleUpdateProfile,
    updateProfileLabel,
  } = profileStore();

  const { userData } = authStore();

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      toggleUpdateProfile();
    }
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewProfileLabel(event.target.value);
  };

  const handleUpdateProfile = async () => {
    await updateProfileOnApi(userData.id, p.id, updatedProfileLabel);
    updateProfileLabel(p.id, updatedProfileLabel);
    toggleUpdateProfile();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleUpdateProfile();
  };

  const handleCancel = () => {
    toggleUpdateProfile();
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
            p.label.toLowerCase() === profile.toLowerCase()
              ? 'scale-110 bg-activeColor shadow-lg'
              : 'bg-activeGrayColor shadow-inner opacity-60 hover:opacity-100'
          } profilecard_container profile card hover:bg-activeColor hover:scale-110`}
        />
      </form>
      <div className="flexdiv row gap-2">
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
