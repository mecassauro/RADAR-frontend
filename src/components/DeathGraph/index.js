import React from 'react';
import { Bar } from 'react-chartjs-2';
import './round';

export default function components({ dataMulheres, dataHomens, min, max }) {
  const yLabels = {
    0: '0% ',
    // 5: '5%',
    // 10: '10%',
    // 15: '15%',
    20: '20% ',
    // 25: '25%',
    // 30: '30%',
    // 35: '35%',
    40: '40% ',
  };

  return (
    <Bar
      data={{
        labels: [
          '< 18',
          '18 - 21',
          '21 - 24',
          '24 - 27',
          '27 - 30',
          '30 - 35',
          '35 - 40',
          '> 40',
        ],
        datasets: [
          {
            label: 'Mulheres',
            data: dataMulheres,
            yAxisID: 'y-axis-1',
            backgroundColor: '#E786D7',
          },

          {
            label: 'Homens',
            data: dataHomens,
            yAxisID: 'y-axis-2',
            backgroundColor: '#5E6BE3',
          },
        ],
      }}
      options={{
        cornerRadius: 8,
        maintainAspectRatio: false,

        legend: {
          display: true,
          align: 'end',
          position: 'top',
          labels: {
            boxWidth: 14,
            fontSize: 14,
            fontStyle: 'bold',
          },
        },

        scales: {
          yAxes: [
            {
              id: 'y-axis-1',
              position: 'left',
              ticks: {
                callback(value) {
                  return yLabels[value];
                },
                fontColor: '#979797',
                min,
                max,
              },
            },

            {
              id: 'y-axis-2',
              position: 'right',
              display: false,
              ticks: {
                min,
                max,
              },
            },
          ],
        },
        tooltips: {
          callbacks: {
            title(tooltipItem, data) {
              return `${data.labels[tooltipItem[0].index]} anos`;
            },
            label(tooltipItem, data) {
              return ` ${data.datasets[0].data[tooltipItem.index]}%`;
            },
            afterLabel(tooltipItem, data) {
              const dataset = data.datasets[0];
              const percent = Math.round(dataset.data[tooltipItem.index] * 50);
              return `(${percent} mortes)`;
            },
          },
        },
      }}
    />
  );
}
