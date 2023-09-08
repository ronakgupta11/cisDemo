import React, { useState, useEffect }  from 'react'

import { Bar,Line,Pie } from 'react-chartjs-2';
import { Select,Label } from 'flowbite-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  
} from 'chart.js';
// import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import ChartComp from '@/components/ChartComp';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.color = "#ffffff"

function Analytics() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('bar'); // Example filter state
  const pieData = {
    labels: ['MotorBike', 'Car', 'Commercial Car', 'Heavy Vehicle', 'Autos', 'Bus'],
    datasets: [
      {
        label: 'Type of Vehicle',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Vehicle Count on Days',
      },
    },
  };
  
  const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];
  
 const lineData = {
    labels,
    datasets: [
      {
        label: 'Commercial vehicle',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Non Commercial Vehicle',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };



  useEffect(() => {
    // Fetch data based on the filter value and update the 'data' state
    
  }, [filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  return (
    <div  className='p-8'>
      <h1 className='text-white font-bold text-center text-3xl'>
        Analytics
        </h1>
        <div>
        <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="filter"
          value="View Other Analysis"
          className='text-white'
        />
      </div>
      {console.log(filter)}
      <Select
      onChange={(e)=>setFilter(e.target.value)}
        id="filter"
        name='type'
        value={filter}
        
      >
        <option value={"bar"}>
        No of vehicles per hour
        </option>
        <option value={"pie"}>
        Vehicle Type
        </option>
        <option value={"line"}>
        Vehicle Count
        </option>
      </Select>
    </div >
        <div className='p-12 w-3/5 m-auto'>

      {/* <FilterControls onChange={handleFilterChange} /> */}
      {/* <Bar data={data.bar} /> */}
      {filter == "bar" && <ChartComp/>}
      { filter == "line" && <Line data={lineData} options={options} />}

      {filter == "pie" && <Pie data={pieData} />}
      </div>


        </div>

        </div>
  )
}

export default Analytics