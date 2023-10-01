import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/API/users';

function useUserRegisterMutation({
  email,
  password,
  battleTag,
  setCreateUser,
}: {
  email: string;
  password: string;
  battleTag: string;
  setCreateUser: (value: boolean) => void;
}) {
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: () => register(email, password, battleTag),
    onSuccess: () => {
      navigate('/login');
      setCreateUser(false);
    },
    retry: 1,
  });

  return mutate;
}

export default useUserRegisterMutation;
