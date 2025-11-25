const options = {
  chart: {
    type: 'bar',
  },
    plotOptions: {
          bar: {
            borderRadius: 4,
            borderRadiusApplication: 'end',
            horizontal: true,
          },
   title: {
     text: "snow days",
   },
   style: {
      fontSize:  '14px',
      fontWeight:  'bold',
    },
  },

  series: [{ name: 'Snow Days', data: [4, 7, 3, 1] }],
  xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr'] },
};

// code that actually creates the chart:
const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();

// Documentation: https://apexcharts.com/javascript-chart-demos/bar-charts/basic/
