import { FaTrashAlt } from 'react-icons/fa';
import type { ProfileData } from '../../types/store/profileTypes';
import useProfileDeleteMutation from '../../hooks/profiles/useProfileDeleteMutation';

function DeleteProfile({ profileObj }: { profileObj: ProfileData }) {
  const mutateProfile = useProfileDeleteMutation({ profileObj });

  const handleDeleteClick = async () => {
    mutateProfile();
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
