import React from 'react';
import { Line } from 'react-chartjs-2';

const MyLine = props => {
  const { width, height } = props;

  const dataGraph = canvas => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 450);
    gradient.addColorStop(0, 'rgba(0, 122, 255, 0.33)');
    gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0)');

    return {
      labels: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ],
      datasets: [
        {
          lineTension: 0.1,
          backgroundColor: gradient,
          borderColor: '#007AFF',
          borderCapStyle: 'butt',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#639BDC',
          pointBackgroundColor: '#007AFF',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#639BDC',
          pointHoverBorderColor: '#007AFF',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: props.data,
        },
      ],
    };
  };
  const yLabels = {
    0: '0 ',
    // 5: '5mil',
    10: '10mil ',
    // 15: '15mil',
    20: '20mil ',
    // 25: '25mil',
    30: '30mil ',
    // 35: '35mil',
    40: '40mil ',
  };

  const options = {
    responsive: true,
    datasetStrokeWidth: 3,
    pointDotStrokeWidth: 4,
    scaleLabel: "<%= Number(value).toFixed(0).replace('.', ',') + '°C'%>",
    maintainAspectRatio: false,
    legend: {
      display: false,
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
            min: 0,
            max: 40,
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label(tooltipItem, data) {
          return ` ${data.datasets[0].data[tooltipItem.index]} mil`;
        },
      },
    },
  };

  const divStyle = {
    width,
    height,
  };

  return (
    <div className="line-chart" style={divStyle}>
      <Line data={dataGraph} options={options} />
    </div>
  );
};

export default MyLine;
