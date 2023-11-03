import { ChangeEvent, FormEvent, useState, KeyboardEvent, useRef } from 'react';
import { ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';
import { verifyProfileLabelAvailability } from '../../utils/utils';
import { profileStore } from '../../store/profileStore';
// import useOutsideClick from '../useOutsideClick';
import useProfileAddMutation from '../../hooks/profiles/useProfileAddMutation';
import NewProfileMode from './NewProfileMode';
import ErrorToast from '../ErrorToast';

function AddProfile() {
  const {
    profilesData,
    newProfile,
    setNewProfile,
    clearNewProfile,
    setIsCreatingProfile,
  } = profileStore();
  const [inputField, setInputField] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [errorToastMessage, setErrorToastMessage] = useState('');

  // const newProfileInputRef = useRef<HTMLInputElement>(null);

  const mutateProfile = useProfileAddMutation();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewProfile(event.target.value);
  };

  const handleCancel = () => {
    clearNewProfile();
    setInputField(false);
    setIsCreatingProfile(false);
  };

  // const handleOutsideClick = () => {
  //   setInputField(false);
  //   console.log('je suis la');
  //   clearNewProfile();
  // };

  // useOutsideClick(newProfileInputRef, handleOutsideClick, ['click']);

  const handleAddProfile = () => {
    try {
      verifyProfileLabelAvailability(newProfile, profilesData);
      mutateProfile();
      setInputField(false);
    } catch (error) {
      setErrorToastMessage((error as Error).message);
      setErrorToast(true);
      setTimeout(() => {
        setErrorToast(false);
      }, 2000);
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
    <div
      className="addprofile_container h-12 flexdiv"
      //  ref={newProfileInputRef}
    >
      {!inputField && <NewProfileMode setInputField={setInputField} />}
      {inputField && (
        <form onSubmit={handleSubmit}>
          <div className="form_container ml-16 flex gap-6 relative">
            {errorToast && (
              <ErrorToast
                toastText={errorToastMessage}
                booleanProp={errorToast}
                topProp="top-[-3.1rem]"
                centeringProp="left-[-1.5rem]"
              />
            )}
            <label htmlFor="newProfile">
              <input
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                // ref={newProfileInputRef}
                className="inputField profile outline-altColor outline-offset-0 scale-110"
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
