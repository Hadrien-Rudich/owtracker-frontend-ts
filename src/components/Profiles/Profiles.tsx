import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';
import { authStore } from '../../store/authStore';
import { profileStore } from '../../store/profileStore';
import AddProfile from './AddProfile';
import Profile from './Profile';
import useProfilesQuery from '../../hooks/profiles/useProfilesQuery';
import SavedToast from '../SavedToast';

function Profiles() {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore();
  const { profilesData, profileToast, setProfileToast, profileToastMessage } =
    profileStore();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const { isLoading, isFetching, isError, isSuccess } = useProfilesQuery();

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="Profiles_container flexdiv col lg:mt-[8.5rem] mt-[4.5rem] relative">
      {isError && profilesData.length === 0 && (
        <div className="absolute lg:top-[-5.5rem] top-[-3.5rem] right-1/4 left-1/4 lg:text-5xl text-3xl w-1/2 text-activeColor ">
          NO PROFILES FOUND
        </div>
      )}
      <div className="flexdiv sm:w-80 w-60 h-12 mb-12 bg-mainColor">
        <AddProfile />
      </div>
      <div className="containerbox">
        <SavedToast
          toastText={profileToastMessage}
          booleanProp={profileToast}
          setBooleanProp={setProfileToast}
        />

        <div className="w-52 flex flex-col gap-4">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Profiles;
