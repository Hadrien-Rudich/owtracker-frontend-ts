import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../InputField';
import useUserRegisterMutation from '../../hooks/users/useUserRegisterMutation';
import LoadingSpinner from '../LoadingSpinner';
import { RegisterSchema } from '../../validation/dataValidation';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [battleTag, setBattleTag] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [createUser, setCreateUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [battleTagError, setBattleTagError] = useState('');
  const [battleTagIsInvalid, setBattleTagIsInvalid] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);
  const [passwordDoesNotMatch, setPasswordDoesNotMatch] = useState(false);

  const mutateUser = useUserRegisterMutation({
    email,
    password,
    battleTag,
    setCreateUser,
    setIsLoading,
  });

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

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordDoesNotMatch(true);
      return;
    }

    const results = RegisterSchema.safeParse({ email, battleTag, password });

    if (!results.success) {
      results.error.errors.forEach((error) => {
        switch (error.path[0]) {
          case 'email':
            setEmailError(error.message);
            setEmailIsInvalid(true);
            break;
          case 'battleTag':
            setBattleTagError(error.message);
            setBattleTagIsInvalid(true);
            break;
          case 'password':
            setPasswordError(error.message);
            setPasswordIsInvalid(true);
            break;
          default:
            break;
        }
      });
      return;
    }

    if (RegisterSchema.parse({ email, battleTag, password })) {
      setCreateUser(true);
      setIsLoading(true);
      setTimeout(() => {
        mutateUser();
      }, 1000);
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
              invalid={emailIsInvalid}
              setInvalid={setEmailIsInvalid}
              invalidMessage={emailError}
            />
            <InputField
              label="BattleTag"
              type="text"
              value={battleTag}
              required
              onChange={handleBattleTagChange}
              invalid={battleTagIsInvalid}
              setInvalid={setBattleTagIsInvalid}
              invalidMessage={battleTagError}
            />

            <InputField
              label="Password"
              type="password"
              value={password}
              required
              onChange={handlePasswordChange}
              invalid={passwordIsInvalid}
              setInvalid={setPasswordIsInvalid}
              invalidMessage={passwordError}
            />

            <InputField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              required
              onChange={handleConfirmPasswordChange}
              invalid={passwordDoesNotMatch}
              setInvalid={setPasswordDoesNotMatch}
              invalidMessage="Passwords do not match"
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
