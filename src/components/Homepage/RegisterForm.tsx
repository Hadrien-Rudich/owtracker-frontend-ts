import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../InputField';
import { register } from '../../services/ApiService';
import LoadingSpinner from '../LoadingSpinner';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [battleTag, setBattleTag] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [createUser, setCreateUser] = useState(false);

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

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUser = await register(email, password, battleTag);
    if (newUser) {
      setCreateUser(true);

      setTimeout(() => {
        setCreateUser(false);
        navigate('/login');
      }, 1000);
    } else {
      console.log('couldnt create user');
    }
  };

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
          <div className="button_container flexdiv gap-6 relative h-10">
            {!createUser ? (
              <div className="flexdiv gap-6">
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
            ) : (
              <div className="absolute top-[-2]">
                <LoadingSpinner />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
