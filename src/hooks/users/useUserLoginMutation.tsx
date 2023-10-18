import { useMutation } from '@tanstack/react-query';
import { authStore } from '../../store/authStore';
import { logIn, UserVerified } from '../../services/API/users';

function useUserLoginMutation({
  email,
  password,
  setUserAuthenticated,
  setInvalidCredentials,
}: {
  email: string;
  password: string;
  setUserAuthenticated: (value: boolean) => void;
  setInvalidCredentials: (value: boolean) => void;
}) {
  const { setLoggedIn, setUserData } = authStore();

  const { mutate } = useMutation({
    mutationFn: () => logIn(email, password),
    onSuccess: (fetchedData: UserVerified) => {
      setUserData(fetchedData.user);
      setLoggedIn();
      setUserAuthenticated(false);
    },
    onError: () => {
      setUserAuthenticated(false);
      setInvalidCredentials(true);
    },
    retry: 1,
  });

  return mutate;
}

export default useUserLoginMutation;
