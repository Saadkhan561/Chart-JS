import { useState } from 'react';
import './App.css';
import BarChart from './components/barChart';
import LineChart from './components/lineChart';
import PieChart from './components/pieChart';
import { UserData } from './data';

function App() {
  const [userData1, setUserData1] = useState({
    labels: UserData.map((d) => d.year),
    datasets: [
      {
        label: 'User Gained',
        data: UserData.map((d) => d.userGain),
        backgroundColor: ['green'],
        borderColor: ['black'],
        borderWidth: 2,
      },
      {
        label: 'User Lost',
        data: UserData.map((d) => d.userLost),
        backgroundColor: ['blue'],
        borderColor: ['black'],
        borderWidth: 2,
      },
    ],
  });
  const [userData2, setUserData2] = useState({
    labels: UserData.map((d) => d.year),
    datasets: [
      {
        label: 'User Gained',
        data: UserData.map((d) => d.userGain),
        backgroundColor: ['green','blue','pink','yellow','purple'],
        borderColor: ['black'],
        borderWidth: 2,
      }
    ],
  });

  return (
    <div className='div'>
      <div className='main'>
        <BarChart chartData={userData1} />
      </div>
      <div className='main'>
        <LineChart chartData={userData1} />
      </div>
      <div className='main'>
        <PieChart chartData={userData2} />
      </div>
    </div>
  );
}

export default App;
