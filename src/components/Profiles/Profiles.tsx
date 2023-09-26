import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../LoadingSpinner';
import { authStore } from '../../store/authStore';
import { profileStore } from '../../store/profileStore';
import AddProfile from './AddProfile';
import Profile from './Profile';
import { fetchProfilesFromApi } from '../../services/API/profiles';
import type { ProfileData } from '../../types/store/profileTypes';
import SavedToast from '../SavedToast';

function Profiles() {
  const navigate = useNavigate();

  const { isLoggedIn, userData } = authStore();
  const {
    selectedProfile,
    profilesData,
    addProfilesData,
    profileSavedToast,
    setProfileSavedToast,
  } = profileStore();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const {
    isLoading,
    isFetching,
    //  isError, isSuccess
  } = useQuery({
    queryKey: ['profilesData'],
    queryFn: () => fetchProfilesFromApi(userData.id),
    onSuccess: (fetchedData: ProfileData[]) => {
      addProfilesData(fetchedData);
    },
    retry: 1,
  });

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <div className="Profiles_container flexdiv col lg:mt-[8.5rem] my-24 relative">
      {selectedProfile.label === '' && (
        <div className="title_container profileheader flexdiv">
          <h3 className="">
            {profilesData.length === 0
              ? 'CREATE A PROFILE'
              : 'SELECT A PROFILE'}
          </h3>
        </div>
      )}
      <div className="containerbox">
        <SavedToast
          topPosition="top-[-4rem]"
          toastText="Profile saved!"
          booleanProp={profileSavedToast}
          setBooleanProp={setProfileSavedToast}
        />
        <div className="-mt-2">
          <AddProfile />
        </div>
        <div className="w-52 flex flex-col gap-4">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Profiles;
