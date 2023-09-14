import { MouseEvent } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import type { ProfileData } from '../../types/store/profileTypes';
import { profileStore } from '../../store/profileStore';
import { deleteProfileFromApi } from '../../services/ApiService';
import { authStore } from '../../store/authStore';

function DeleteProfile({ profileObj }: { profileObj: ProfileData }) {
  const { profilesData, clearProfileData, deleteProfile } = profileStore();

  const { userData } = authStore();

  const handleDeleteClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const targetLabel = event.currentTarget.value;
    const foundProfile = profilesData.find(
      (p) => p.label === targetLabel && userData.id === p.userId
    );
    if (foundProfile) {
      await deleteProfileFromApi(userData.id, foundProfile.id);
      deleteProfile(foundProfile.label);
      clearProfileData();
    }
  };

  return (
    <button
      value={profileObj.label}
      onClick={handleDeleteClick}
      type="button"
      className=" absolute text-warning hover:scale-125 top-3 right-[-0.2rem]"
    >
      <FaTrashAlt className="sign h-[1rem] w-[1rem]" />
    </button>
  );
}

export default DeleteProfile;
