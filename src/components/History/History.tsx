import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authStore } from '../../store/authStore';
import { historyStore } from '../../store/historyStore';

import { fetchHistoryFromApi } from '../../services/ApiService';
import MonthTabs from './MonthTabs';
import HistoryDetails from './HistoryDetails';

function History() {
  const navigate = useNavigate();

  const { isLoggedIn } = authStore();
  const { addHistoryData } = historyStore();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  });

  useEffect(() => {
    async function getHistoryData() {
      try {
        const data = await fetchHistoryFromApi();
        addHistoryData(data);
      } catch (error) {
        console.error('Failed to fetch history data', error);
      }
    }

    getHistoryData();
  }, [addHistoryData]);

  return (
    <div className="History_container lg:mt-[8.5rem] my-24 container mx-auto">
      <div className="MonthTabs_container">
        <MonthTabs />
      </div>
      <div className="HistoryDetails_container mt-12">
        <HistoryDetails />
      </div>
    </div>
  );
}

export default History;
