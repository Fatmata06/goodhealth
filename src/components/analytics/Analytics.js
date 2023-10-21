import { CChart } from '@coreui/react-chartjs';
import React from 'react'
function Analytics() {
  return (
    
    <CChart
    
    type="line" 
    data={{
      labels: ["January", "February", "March", "April", "May", "June", "July","Aout ","septembre","Octobre","Novembr","Decembre"],
      datasets: [
        {
          label: "Evolution prise de rendez vous",
          backgroundColor: "rgba(220, 220, 220, 0.2)",
          borderColor: "rgba(220, 220, 220, 1)",
          pointBackgroundColor: "rgba(220, 220, 220, 1)",
          pointBorderColor: "#fff",
          data: [20, 40, 30, 25, 45, 60, 39, 80, 80,30,60,80]
        },
        // {
        //   label: "My Second dataset",
        //   backgroundColor: "rgba(151, 187, 205, 0.2)",
        //   borderColor: "rgba(151, 187, 205, 1)",
        //   pointBackgroundColor: "rgba(151, 187, 205, 1)",
        //   pointBorderColor: "#fff",
        //   data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
        // },
      ],
    }}
    options={{
      plugins: {
        legend: {
          labels: {
            // color: getStyle('--cui-body-color'),
          }
        }
      },
      scales: {
        x: {
          grid: {
            // color: getStyle('--cui-border-color-translucent'),
          },
          ticks: {
            // color: getStyle('--cui-body-color'),
          },
        },
        y: {
          grid: {
            // color: getStyle('--cui-border-color-translucent'),
          },
          ticks: {
            // color: getStyle('--cui-body-color'),
          },
        },
      },
    }}
  />
  )
}

export default Analytics;