// Store data in simple variables for easy access
const chartData = [4, 7, 3, 5];
const categories = ['Jan', 'Feb', 'Mar', 'Apr'];

// chart options:
const options = {
  chart: {
    type: 'bar',
    events: {
      dataPointSelection: getDetails,
    },
  },
  series: [{ name: 'Count', data: chartData }],
  xaxis: { categories: categories },
};

function getDetails(event, chartContext, config) {
  const slot = config.dataPointIndex; // get the index of the clicked point
  console.log(slot); 
  console.log(chartData[slot]);
  console.log(categories[slot]);
  const panel = document.querySelector ("#details");


  const snowDays = chartData[slot];
  const month =categories[slot];
  panel.innerHTML= `
  <h1> ${snowDays}</h1>
  <p> Snow Days: ${month}</p>

  <iframe src="https://crt-climate-explorer.nemac.org/climate_graphs/?city=New+Orleans%2C+LA&county=Orleans%2BParish&area-id=22071&fips=22071&zoom=7&lat=29.9508941&lon=-90.07583559999999&id=pcpn"></iframe>
  `;

  // 1. How do you get the value of the clicked point?
  // 2. How do you get the category of the clicked point?
  // 3. How do you output the value and label to the details panel?
}

// code that actually creates the chart:
const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();
