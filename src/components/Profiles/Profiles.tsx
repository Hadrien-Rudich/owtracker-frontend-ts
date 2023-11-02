import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';
import { authStore } from '../../store/authStore';
import { profileStore } from '../../store/profileStore';
import AddProfile from './AddProfile';
import Profile from './Profile';
import useProfilesQuery from '../../hooks/profiles/useProfilesQuery';
import SuccessToast from '../SuccessToast';

function Profiles() {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore();
  const {
    profilesData,
    profileSavedToast,
    isUpdatingProfile,
    setProfileSavedToast,
    setProfileSavedToastMessage,
    profileSavedToastMessage,
  } = profileStore();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const {
    isLoading,
    isFetching,
    isError,
    //  isSuccess
  } = useProfilesQuery();

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="Profiles_container flexdiv col lg:my-[8.5rem] my-[4.5rem] relative">
      {isError && profilesData.length === 0 && (
        <div className="absolute lg:top-[-5.5rem] top-[-3.5rem] right-1/4 left-1/4 lg:text-5xl text-3xl w-1/2 text-activeColor ">
          NO PROFILES FOUND
        </div>
      )}
      <div
        // className="flexdiv sm:w-80 w-60 h-12 mb-12 bg-mainColor">

        className={`${
          isUpdatingProfile ? 'grayscale pointer-events-none' : ''
        }  
      flexdiv sm:w-80 w-60 h-12 mb-12 bg-mainColor`}
      >
        <AddProfile />
      </div>
      <div className="containerbox">
        {profileSavedToast && (
          <SuccessToast
            toastText={profileSavedToastMessage}
            setToastText={setProfileSavedToastMessage}
            isVisible={profileSavedToast}
            setIsVisible={setProfileSavedToast}
          />
        )}
        <div className="w-52 flex flex-col gap-4">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Profiles;
