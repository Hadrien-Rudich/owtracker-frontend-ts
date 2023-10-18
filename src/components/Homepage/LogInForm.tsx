import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../InputField';
import { authStore } from '../../store/authStore';
import LoadingSpinner from '../LoadingSpinner';
import useUserLoginMutation from '../../hooks/users/useUserLoginMutation';

function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const { isLoggedIn } = authStore();

  const navigate = useNavigate();

  const mutateUser = useUserLoginMutation({
    email,
    password,
    setUserAuthenticated,
    setInvalidCredentials,
  });

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleCancel = () => {
    navigate('/');
  };

  function handleLogIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setInvalidCredentials(false);
    setUserAuthenticated(true);
    setTimeout(() => {
      mutateUser();
    }, 1500);
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profiles');
    }
  }, [isLoggedIn, navigate]);

  return (
    <form onSubmit={handleLogIn}>
      <div className="login_container flexdiv lg:mt-44 my-24">
        <div className=" inputandbutton_container containerbox ">
          <div className="input_container flexdiv col gap-4 ">
            <InputField
              label="email"
              type="email"
              value={email}
              required
              onChange={handleEmailChange}
              invalid={invalidCredentials}
              setInvalid={setInvalidCredentials}
              invalidMessage="Invalid credentials"
            />

            <InputField
              label="password"
              type="password"
              value={password}
              required
              onChange={handlePasswordChange}
              invalid={invalidCredentials}
              setInvalid={setInvalidCredentials}
              invalidMessage="Invalid credentials"
            />
          </div>
          <div className="button_container flexdiv gap-6">
            {!userAuthenticated ? (
              <div className="flexdiv gap-6">
                <button
                  onClick={handleCancel}
                  type="button"
                  className="button cancel "
                >
                  <p className="">Cancel</p>
                </button>
                <button type="submit" className="button validate">
                  <p className="">Log in</p>
                </button>
              </div>
            ) : (
              <div className="absolute top-[-2]">
                <LoadingSpinner />
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

export default LogInForm;
