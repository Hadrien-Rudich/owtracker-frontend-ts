import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authStore } from '../../store/authStore';
import { fetchUserData } from '../../services/ApiService';
import Details from './Details';
import Security from './Security';
import Tabs from './Tabs';

function Account() {
  const { setUserData, activeTab } = authStore();

  useEffect(() => {
    async function getUserData() {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    }

    getUserData();
  }, [setUserData]);

  const navigate = useNavigate();
  const { isLoggedIn } = authStore();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="Account_container flexdiv col lg:mt-[8.5rem] my-24 relative">
      <div className="Tabs_container absolute sm:top-[-3.5rem] top-[-2.98rem]">
        <Tabs />
      </div>
      <div
        className="main_container 
       flexdiv col sm:gap-10 gap-5
  sm:w-80 sm:py-10 w-60 py-5
  bg-mainColor shadow-lg rounded-sm rounded-t-none"
      >
        {activeTab === 'details' ? (
          <div className="Details_container">
            <Details />
          </div>
        ) : (
          <div className="Security_container">
            <Security />
          </div>
        )}
      </div>
    </div>
  );
}

export default Account;
