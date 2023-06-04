import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../InputField';
import { authStore } from '../../store/authStore';

function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoggedIn, logIn } = authStore();

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

  const handleLogIn = (event: FormEvent) => {
    event.preventDefault();
    logIn();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profiles');
    }
  });

  return (
    <form action="submit">
      <div className="login_container flexdiv lg:mt-44 my-24">
        <div className=" inputandbutton_container containerbox">
          <div className="input_container flexdiv col gap-4">
            <InputField
              label="Email"
              type="email"
              value={email}
              required
              onChange={handleEmailChange}
            />

            <InputField
              label="Password"
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
            <button
              onClick={handleLogIn}
              type="submit"
              className="button validate"
            >
              <p className="">Log in</p>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LogInForm;
