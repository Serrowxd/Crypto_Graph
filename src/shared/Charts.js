import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Charts extends Component {
  constructor(props) {
    super(props);

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

    // ChartJS Please Work
    // X-Axis lines will not respond to color updates
    // Documentation is trash
    this.state = {
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
          name: 'series-1',
          type: 'line',
          data: [30, 40, 25, 50, 49, 21, 70, 51],
        },
        {
          name: 'series-2',
          type: 'column',
          data: [23, 12, 54, 61, 32, 56, 81, 19],
        },
        {
          name: 'series-3',
          type: 'column',
          data: [62, 12, 45, 55, 76, 41, 23, 43],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="col mixed-chart">
            <Chart
              options={this.state.optionsMixedChart}
              series={this.state.seriesMixedChart}
              type="line"
              width="700"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
