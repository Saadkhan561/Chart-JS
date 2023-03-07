import { useEffect, useState } from "react";
import "./App.css";
import BarChart from "./components/barChart";
import LineChart from "./components/lineChart";
import PieChart from "./components/pieChart";

function App() {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    async function Fetch() {
      const res = await fetch("http://localhost:3000/UserData");
      if (!res.ok) {
        throw new Error(`HTTP Error ${res.status} not found`);
      }
      const resData = await res.json();
      const data = await resData;
      const year = [];
      const userGain = [];
      const userLost = [];
      data.map((d) => {
        year.push(d.year)
        userGain.push(d.userGain)
        userLost.push(d.userLost)
      })
      setChartData({
        labels: year,
        datasets: [
          {
            label: "User Gained",
            data: userGain,
            backgroundColor: ["green"],
            borderColor: ["black"],
            borderWidth: 2,
          },
          {
            label: "User Lost",
            data: userLost,
            backgroundColor: ["pink"],
            borderColor: ["black"],
            borderWidth: 2
          }
        ],
      });
    }

    Fetch();
  }, []);

  return (
    <div className="div">
      <div className="main">
        {chartData && <BarChart chartData={chartData} />}
      </div>
      <div className="main">
        {chartData && <LineChart chartData={chartData}/>}
      </div>

      <div className='main'>
        {chartData && <PieChart chartData={chartData} />}
      </div>
    </div>
  );
}

export default App;
