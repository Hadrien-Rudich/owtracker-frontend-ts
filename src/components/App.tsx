import { Routes, Route } from 'react-router-dom';
import GameReport from './GameReport/GameReport';
import Header from './Header/Header';
import LogInForm from './Homepage/LogInForm';
import RegisterForm from './Homepage/RegisterForm';
import HomePage from './Homepage/HomePage';
import Games from './Games/Games';
import Profiles from './Profiles/Profiles';
import Account from './Account/Account';
import Stats from './Stats/Stats';

function App() {
  return (
    <div className="text-center">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/games" element={<Games />} />
        <Route path="/game" element={<GameReport />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
