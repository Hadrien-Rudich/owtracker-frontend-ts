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
import Games from './Games/Games';
import Profiles from './Profiles/Profiles';
import Account from './Account/Account';
import RQMain from './React-Query/RQMain';

function App() {
  return (
    <div className="text-center">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bar" element={<SavingProgressBar />} />
        <Route path="/rq" element={<RQMain />} />

        <Route path="/login" element={<LogInForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/games" element={<Games />} />
        <Route path="/game" element={<GameReport />} />
        {/* <Route path="/stats" element={<Stats />} /> */}
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
