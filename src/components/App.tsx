import {
  Routes,
  Route,
  // ,   useNavigate
} from 'react-router-dom';
// import Cookies from 'js-cookie';
// import { useEffect } from 'react';
import SavingProgressBar from './GameReport/SavingProgressBar';
import GameReport from './GameReport/GameReport';
import Header from './Header/Header';
import LogInForm from './Homepage/LogInForm';
import RegisterForm from './Homepage/RegisterForm';
import HomePage from './Homepage/HomePage';
import History from './History/History';
import Profiles from './Profiles/Profiles';
// import Stats from './Stats/Stats';
import Account from './Account/Account';

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const checkAuthentication = () => {
  //     const allCookies = Cookies.get();
  //     const newToken = Cookies.get('zob');
  //     const accessToken = Cookies.get('jwt');
  //     const refreshToken = Cookies.get('cookie');

  //     console.log(accessToken);
  //     console.log(refreshToken);
  //     console.log(allCookies);

  //     if (accessToken) {
  //       // Validate access token and set user as logged in
  //       // e.g., update application state or authentication store
  //       navigate('/profiles');
  //     } else if (refreshToken) {
  //       // Send request to server to obtain new access token
  //       // using the refresh token
  //     } else {
  //       // No access token or refresh token found, user is logged out
  //       // e.g., update application state or authentication store
  //     }
  //   };

  //   checkAuthentication();
  // }, [navigate]);

  return (
    <div className="text-center">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bar" element={<SavingProgressBar />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/games" element={<History />} />
        <Route path="/game" element={<GameReport />} />
        {/* <Route path="/stats" element={<Stats />} /> */}
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
