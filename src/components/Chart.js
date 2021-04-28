import React, { useState, useEffect } from 'react'
import { Bar, Line } from 'react-chartjs-2';

export const Chart = () => {

  const [dailyData, setDailyData ] = useState([]);

  const fetchDailyData = async () => {
    const response = await fetch('https://covid19.mathdro.id/api/daily');
    let data = await response.json();
    
    const modifiedData = data.map(dailyData => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
    }))
    setDailyData(modifiedData);
  };

  useEffect(() => {
    fetchDailyData();
  }, []);

  const lineChart = (
    dailyData.length ? <Line
        data={{
            labels: dailyData.map(( {date} ) => date),
            datasets: [{
                data: dailyData.map(( {confirmed} ) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true
            }, {
                data: dailyData.map(( {deaths} ) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroudColor: 'rgba(255, 0, 0, 0.5)',
                fill: true
            }],
        }}
    /> : null
  );

    return (
        <div>
            {lineChart}
        </div>
    )
}
