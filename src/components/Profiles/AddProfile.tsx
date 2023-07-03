import {
  ChangeEvent,
  FormEvent,
  useState,
  MouseEvent,
  KeyboardEvent,
  useRef,
} from 'react';
import { ImPlus, ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';
import { verifyProfileLabelAvailability } from '../../utils/utils';
import { profileStore } from '../../store/profileStore';
import { addProfileToApi } from '../../services/ApiService';
import useOutsideClick from '../useOutsideClick';

import { authStore } from '../../store/authStore';

function AddProfile() {
  const {
    profilesData,
    newProfile,
    setNewProfile,
    clearNewProfile,
    addNewProfile,
    clearProfile,
    setIsUpdatingProfile,
  } = profileStore();
  const { userData } = authStore();
  const [inputField, setInputField] = useState(false);
  const newProfileInputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewProfile(event.target.value);
  };
  const handlePlusClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsUpdatingProfile(false);
    setInputField(true);

    clearProfile();
  };

  const handleCancel = () => {
    clearNewProfile();
    setInputField(false);
  };

  const handleOutsideClick = () => {
    setInputField(false);
    clearNewProfile();
  };

  useOutsideClick(newProfileInputRef, handleOutsideClick, ['click']);

  const handleAddProfile = async () => {
    const profileLabelInUse = verifyProfileLabelAvailability(
      newProfile,
      profilesData
    );

    if (profileLabelInUse) {
      console.log(`You already have a profile called ${newProfile}`);
      return;
    }

    if (newProfile === '') {
      console.log('Profile name cannot be empty');
      return;
    }

    try {
      const profileToApi = await addProfileToApi(userData.id, newProfile);
      addNewProfile(profileToApi.profile);
      setInputField(false);
      clearNewProfile();
    } catch (error) {
      console.error('Failed to add profile', error);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddProfile();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className="addprofile_container h-12 flexdiv" ref={newProfileInputRef}>
      {!inputField && (
        <button
          type="button"
          className="addbutton_container hover:scale-110 "
          onClick={handlePlusClick}
        >
          <span className="sr-only">Add Profile</span>
          <ImPlus className="sign h-7 w-7" />
        </button>
      )}
      {inputField && (
        <form onSubmit={handleSubmit}>
          <div className="form_container ml-16 flex gap-6">
            <label htmlFor="newProfile">
              <input
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                ref={newProfileInputRef}
                className="profile card scale-110"
                name="profile"
                required
                value={newProfile}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
                type="text"
              />
            </label>
            <div className="button_container flexdiv row gap-2">
              <button
                type="submit"
                onClick={handleAddProfile}
                className="text-validate hover:scale-125"
              >
                <FaCheck className="sign h-5 w-5" />
              </button>
              <button
                onClick={handleCancel}
                type="button"
                className="text-warning hover:scale-125"
              >
                <ImCross className="sign h-[0.9rem] w-[0.9rem]" />
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddProfile;
