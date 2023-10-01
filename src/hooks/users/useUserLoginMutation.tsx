import { useMutation } from '@tanstack/react-query';
import { authStore } from '../../store/authStore';

import { logIn, UserVerified } from '../../services/API/users';

function useUserLoginMutation({
  email,
  password,
  setUserAuthenticated,
}: {
  email: string;
  password: string;
  setUserAuthenticated: (value: boolean) => void;
}) {
  const { setLoggedIn, setUserData } = authStore();

  const { mutate } = useMutation({
    mutationFn: () => logIn(email, password),
    onSuccess: (fetchedData: UserVerified) => {
      setUserData(fetchedData.user);
      setLoggedIn();
      setUserAuthenticated(false);
    },
    retry: 1,
  });

  return mutate;
}

export default useUserLoginMutation;
