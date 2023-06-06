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

function AddProfile() {
  const { newProfile, setNewProfile, addNewProfile, clearNewProfile } =
    profileStore();
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

  const handleOutsideClick = () => {
    setInputField(false);
  };

  useOutsideClick(newProfileInputRef, handleOutsideClick, ['click']);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newProfile !== '') {
      addNewProfile(newProfile);
      addUserProfileToDb(newProfile);
      setInputField(false);
      clearNewProfile();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('pressed enter');
      handleSubmit(event);
    } else if (event.key === 'Escape') {
      clearNewProfile();
      setInputField(false);
      console.log('pressed escape');
    }
  };

  return (
    <div className="addprofile_container h-12 flexdiv" ref={newProfileInputRef}>
      <button onClick={handlePlusClick} type="button">
        {!inputField && (
          <div className="addbutton_container">
            <ImPlus className="sign main validate" />
          </div>
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
                className="card profile"
                name="profile"
                required
                value={newProfile}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
                type="text"
              />
            </label>

            <button type="submit">
              <ImPlus className="sign validate" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddProfile;
