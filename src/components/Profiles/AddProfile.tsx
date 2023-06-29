import {
  ChangeEvent,
  FormEvent,
  useState,
  MouseEvent,
  KeyboardEvent,
  useRef,
} from 'react';
import { ImPlus, ImCross } from 'react-icons/im';
import { profileStore } from '../../store/profileStore';
import { addUserProfileToDb } from '../../services/ApiService';
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
      const profileAddedtoDb = await addUserProfileToDb(
        userData.id,
        newProfile
      );
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
      try {
        handleAddClick();
      } catch (error) {
        // Handle error
        console.error('Failed to add profile', error);
      }
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      clearNewProfile();
      setInputField(false);
      console.log('pressed escape');
    }
  };

  return (
    <div className="addprofile_container h-12 flexdiv" ref={newProfileInputRef}>
      <button onClick={handlePlusClick} type="button">
        {!inputField && (
          <button
            type="button"
            className="addbutton_container hover:scale-110 "
          >
            <span className="sr-only">Add Profile</span>
            <ImPlus className="sign main validate" />
            {/* <ImPlus className="sign main validate" /> */}
          </button>
        )}
      </button>
      {inputField && (
        <form onSubmit={handleSubmit}>
          <div className="form_container flex gap-4">
            <button onClick={handleCrossClick} type="button">
              <ImCross className="sign cancel" />
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

            <button onClick={handleAddClick} type="submit">
              <ImPlus className="sign validate" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddProfile;
