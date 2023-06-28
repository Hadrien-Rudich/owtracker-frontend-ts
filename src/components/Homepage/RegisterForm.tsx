import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authStore } from '../../store/authStore';
import InputField from '../InputField';
import { register } from '../../services/ApiService';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [battleTag, setBattleTag] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { isLoggedIn, logIn } = authStore();

  const navigate = useNavigate();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleBattleTagChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBattleTag(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleCancelClick = () => {
    navigate('/');
  };

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await register(email, password, battleTag);
      // logIn();
    } catch (error) {
      console.error('Failed to register user', error);
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profiles');
    }
  });

  return (
    <div className="register_container flexdiv row lg:mt-44 my-24">
      <form onSubmit={handleRegister}>
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
              label="BattleTag"
              type="text"
              value={battleTag}
              required
              onChange={handleBattleTagChange}
            />

            <InputField
              label="Password"
              type="password"
              value={password}
              required
              onChange={handlePasswordChange}
            />

            <InputField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              required
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <div className="button_container flexdiv gap-6">
            <button
              onClick={handleCancelClick}
              type="button"
              className="button cancel"
            >
              Cancel
            </button>
            <button type="submit" className="button validate">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
