import { FaTrashAlt } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';
import type { ProfileData } from '../../types/store/profileTypes';
import { profileStore } from '../../store/profileStore';
import { deleteProfileFromApi } from '../../services/ApiService';

function DeleteProfile({ profileObj }: { profileObj: ProfileData }) {
  const { clearProfileData, deleteProfile } = profileStore();

  const mutation = useMutation({
    mutationFn: () => deleteProfileFromApi(profileObj.userId, profileObj.id),
    onSuccess: () => {
      deleteProfile(profileObj.label);
      clearProfileData();
    },
    retry: 1,
  });

  const handleDeleteClick = async () => {
    mutation.mutate();
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
