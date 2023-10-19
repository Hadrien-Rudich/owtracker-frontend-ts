import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/API/users';

function useUserRegisterMutation({
  email,
  password,
  battleTag,
  setCreateUser,
  setIsLoading,
}: {
  email: string;
  password: string;
  battleTag: string;
  setCreateUser: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
}) {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: () => register(email, password, battleTag),
    onSuccess: () => {
      navigate('/login');
      setCreateUser(false);
      setIsLoading(false);
    },
    onError: (error) => {
      console.log(error);
      if (
        error.response &&
        error.response.data.message === 'Email is already in use'
      ) {
        const customErrorMessage = error.response.data.message;
        console.log('Custom Error:', customErrorMessage);
      }

      setCreateUser(false);
      setIsLoading(false);
    },
    retry: 1,
  });

  return mutate;
}

export default useUserRegisterMutation;
