import Link from 'next/link'
import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function ChartComp() {
  const labels = ["12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
  const data = {
    labels: labels,
  
    datasets: [
      {
        label: "Vehicle Count",
        
        backgroundColor: "#36a2eb",
        
        borderColor: "#36a2eb",
        data: [15, 20, 17, 35, 40, 38, 55],
        
      },
    ],
    
  };
  // const options = {
  //   scales: {
  //     xAxis: {
  //       grid:false
  //     },
  //     yAxis:{
  //       grid:false
  //     }
  //   }
  // }

  return (
    <div className='h-1/2 p-2 w-full'>
      <div className='flex w-full items-center justify-between text-white font-semibold text-lg p-4 '>
        <h4>
          Activity
        </h4>
        <h4>Hourly</h4>
      </div>
      <div className='border border-white'></div>
      <div className='chart-block'>
      <Bar className='bg-transparent' data={data} />


      </div>
      <div className='btn-block'>
        <Link href={"/analytics"}>
        <div className='text-[#D95252] flex items-center justify-end space-x-2'>
          <p>
            Details
            </p>
            <HiArrowRight className='w-5 h-5'/>
          </div>
          </Link>
      </div>

    
    </div>

  )
}

export default ChartComp