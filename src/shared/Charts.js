import React from 'react';
import Chart from 'react-apexcharts';

function Charts(props) {
  // Theme Object
  const colorTheme = {
    light: {
      white: '#f5f5f5',
      whiteish: '#e0e0e0',
      whiter: '#9e9e9e',
    },
    dark: {
      black: '#2f2f2f',
      blacker: '#242424',
      blackish: '#424242',
    },
    colors: {
      blue: '#00bcd4',
      orange: '#e6a800',
      green: '#8bc34a',
    },
  };

  const options = {
    optionsMixedChart: {
      grid: {
        show: true,
        borderColor: props.themeSwap ? colorTheme.dark.black : colorTheme.light.white,
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        row: {
          colors: undefined,
          opacity: 0.5,
        },
        column: {
          colors: undefined,
          opacity: 0.5,
        },
        padding: {
          top: 0,
          right: 10,
          bottom: 0,
          left: 10,
        },
      },
      chart: {
        id: 'bar',
        foreColor: props.themeSwap ? colorTheme.dark.black : colorTheme.light.white,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
          endingShape: 'arrow',
        },
      },
      stroke: {
        width: [4, 0, 0],
      },
      xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      markers: {
        size: 6,
        strokeWidth: 3,
        fillOpacity: 0,
        strokeOpacity: 0,
        hover: {
          size: 8,
        },
      },
      yaxis: {
        tickAmount: 5,
        min: 0,
        max: 100,
      },
    },
    seriesMixedChart: [
      {
        name: '',
        type: 'line',
        data: [30, 40, 25, 50, 49, 21, 70, 51],
      },
    ],
  };

  return (
    <div className="app">
      <div className="row">
        <div className="col mixed-chart">
          <Chart options={options.optionsMixedChart} series={options.seriesMixedChart} type="line" width="700" />
        </div>
      </div>
    </div>
  );
}

export default Charts;
