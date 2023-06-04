import { Routes, Route } from "react-router-dom";

// import Gamereport from "./GameReport/GameReport";
import Header from "./Header/Header";
import LogInForm from "./Homepage/LogInForm";
import RegisterForm from "./Homepage/RegisterForm";
import HomePage from "./Homepage/HomePage";
// import History from "./History/History";
// import ProfilesPage from "./Profiles/Profiles";
// import Stats from "./Stats/Stats";
// import Account from "./Account/Account";

function App() {
  return (
    <div className="text-center">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* <Route path="/game" element={<Gamereport />} />
        <Route path="/history" element={<History />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/profiles" element={<ProfilesPage />} />
        <Route path="/account" element={<Account />} /> */}
      </Routes>
    </div>
  );
}

export default App;
