import Chart from "chart.js";

import nodes from "./nodes";

const chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)"
};

const ctx = document.getElementById("chart").getContext("2d");

export let myChart = new Chart(ctx, {
  type: "line",
  data: {
    datasets: [
      {
        label: nodes[0],
        data: [],
        backgroundColor: [chartColors.red],
        borderColor: [chartColors.red],
        fill: false,
        borderWidth: 1
      },
      {
        label: nodes[1],
        data: [],
        backgroundColor: [chartColors.green],
        borderColor: [chartColors.green],
        fill: false,
        borderWidth: 1
      },
      {
        label: nodes[2],
        data: [],
        backgroundColor: [chartColors.blue],
        borderColor: [chartColors.blue],
        fill: false,
        borderWidth: 1
      },
      {
        label: nodes[3],
        data: [],
        backgroundColor: [chartColors.yellow],
        borderColor: [chartColors.yellow],
        fill: false,
        borderWidth: 1
      }
    ]
  },
  options: {
    elements: {
      point: {
        radius: 0
      }
    },
    responsive: true,
    scales: {
      xAxes: [
        {
          display: true
        }
      ],
      yAxes: [
        {
          display: true,
          ticks: {
            beginZero: false
          },
          scaleLabel: {
            display: true,
            labelString: "temp"
          }
        }
      ]
    }
  }
});

export function removeData(chart) {
    console.log("remove data")
    chart.data.labels = [];
    chart.data.datasets.forEach((dataset) => {
        dataset.data = [];
    });
    chart.update();
}

export function addData(chart, label, dataset, data) {
  if (dataset === 0) { // only add labels for first datasource
    chart.data.labels.push(label);
  }
  chart.data.datasets[dataset].data.push(data);
  chart.update();
}
