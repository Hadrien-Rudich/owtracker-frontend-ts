import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../InputField';
import { authStore } from '../../store/authStore';
import { logIn } from '../../services/ApiService';

function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoggedIn, setLoggedIn, setUserData } = authStore();

  const navigate = useNavigate();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleCancel = () => {
    navigate('/');
  };

  async function handleLogIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await logIn(email, password);
      setUserData(response.user);
      setLoggedIn();
    } catch (error) {
      console.error('Failed to authenticate user', error);
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profiles');
    }
  }, [isLoggedIn, navigate]);

  return (
    <form onSubmit={handleLogIn}>
      <div className="login_container flexdiv lg:mt-44 my-24">
        <div className=" inputandbutton_container containerbox">
          <div className="input_container flexdiv col gap-4">
            <InputField
              label="email"
              type="email"
              value={email}
              required
              onChange={handleEmailChange}
            />

            <InputField
              label="password"
              type="password"
              value={password}
              required
              onChange={handlePasswordChange}
            />
          </div>
          <div className="button_container flexdiv gap-6">
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
        </div>
      </div>
    </form>
  );
}

export default LogInForm;
