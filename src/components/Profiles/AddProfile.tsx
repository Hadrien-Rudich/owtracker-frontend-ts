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
import useOutsideClick from '../useOutsideClick';
import useProfileAddMutation from '../../hooks/profiles/useProfileAddMutation';

function AddProfile() {
  const {
    profilesData,
    newProfile,
    setNewProfile,
    clearNewProfile,
    unselectProfile,
    setIsUpdatingProfile,
    setProfileSavedToast,
  } = profileStore();
  const [inputField, setInputField] = useState(false);
  const newProfileInputRef = useRef<HTMLInputElement>(null);

  const mutateProfile = useProfileAddMutation();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewProfile(event.target.value);
  };
  const handlePlusClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsUpdatingProfile(false);
    setInputField(true);
    unselectProfile();
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

  const handleAddProfile = () => {
    const profileLabelIsAvailable = verifyProfileLabelAvailability(
      newProfile,
      profilesData
    );
    if (profileLabelIsAvailable) {
      mutateProfile();
      setInputField(false);
      setProfileSavedToast(true);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
          className="addbutton_container hover:scale-110 flexdiv gap-4 sign"
          onClick={handlePlusClick}
        >
          <ImPlus className="h-7 w-7" />
          <p className=" text-2xl">NEW PROFILE</p>
          <span className="sr-only">Add new profile</span>
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
                className="profile card scale-110 outline-none ring-2"
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
