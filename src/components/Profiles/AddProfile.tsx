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
import InputField from '../InputField';

import { profileStore } from '../../store/profileStore';
import { addProfileToApi } from '../../services/ApiService';
import useOutsideClick from '../useOutsideClick';

import { authStore } from '../../store/authStore';

function AddProfile() {
  const { newProfile, setNewProfile, clearNewProfile, addNewProfile } =
    profileStore();
  const { userData } = authStore();
  const [inputField, setInputField] = useState(false);
  const newProfileInputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewProfile(event.target.value);
  };
  const handlePlusClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setInputField(true);
  };

  const handleCrossClick = () => {
    clearNewProfile();
    setInputField(false);
  };

  const handleAddClick = async () => {
    try {
      const profileAddedtoDb = await addProfileToApi(userData.id, newProfile);
      addNewProfile(profileAddedtoDb.profile);

      setInputField(false);
      clearNewProfile();
    } catch (error) {
      // Handle error
      console.error('Failed to add profile', error);
    }
  };

  const handleOutsideClick = () => {
    setInputField(false);
  };

  useOutsideClick(newProfileInputRef, handleOutsideClick, ['click']);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newProfile !== '') {
      handleAddClick();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      clearNewProfile();
      setInputField(false);
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
          <ImPlus className="sign h-6 w-6" />
        </button>
      )}
      {inputField && (
        <form onSubmit={handleSubmit}>
          <div className="form_container flex gap-4">
            <button
              onClick={handleCrossClick}
              type="button"
              className="text-warning hover:scale-125"
            >
              <ImCross className="sign h-[0.9rem] w-[0.9rem]" />
            </button>
            <label htmlFor="newProfile">
              <input
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                ref={newProfileInputRef}
                className="profile card"
                name="profile"
                required
                value={newProfile}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
                type="text"
              />
            </label>
            <button
              type="submit"
              onClick={handleAddClick}
              className="text-validate hover:scale-125"
            >
              <FaCheck className="sign h-5 w-5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddProfile;
