import { useMutation } from '@tanstack/react-query';
import { profileStore } from '../../store/profileStore';
import {
  addProfileToApi,
  ProfileAddedtoApi,
} from '../../services/API/profiles';
import { authStore } from '../../store/authStore';

function useProfileAddMutation() {
  const { newProfile, clearNewProfile, addNewProfile } = profileStore();

  const { userData } = authStore();

  const { mutate } = useMutation({
    mutationFn: () => addProfileToApi(userData.id, newProfile),
    onSuccess: (newProfileAddedToApi: ProfileAddedtoApi) => {
      addNewProfile(newProfileAddedToApi.profile);
      clearNewProfile();
    },
    retry: 1,
  });

  return mutate;
}

export default useProfileAddMutation;
