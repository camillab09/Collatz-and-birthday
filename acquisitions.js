import Chart from "chart.js/auto";

window.collatz = () => {
  let inputNumber = document.getElementById("inputValue").value;

  collatzFunction(inputNumber);
};

let countArray = [];

function collatzFunction(n) {
  countArray = [];
  n = parseInt(n, 10);
  const initalValue = n;
  let count = 0;
  let maxNumber = n;
  if (Number.isInteger(n) && n > 0) {
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
      count++;
      console.log(n);
      maxNumber = Math.max(maxNumber, n);
      countArray.push({ count: count, value: n });
    }
    document.getElementById(
      "output"
    ).innerHTML = `${initalValue} used ${count} steps to reach 1, and the highest value reached was ${maxNumber}`;
    console.log(countArray);
  } else {
    document.getElementById(
      "output"
    ).innerHTML = `please enter a valid integer number`;
  }
  destroyChart();
  createChart();
}

let myChart;

function destroyChart() {
  if (myChart != null) {
    myChart.destroy();
  }
}

function createChart() {
  const data = countArray;

  myChart = new Chart(document.getElementById("acquisitions"), {
    type: "line",
    data: {
      labels: data.map((row) => row.count),
      datasets: [
        {
          label: "Value",
          data: data.map((row) => row.value),
        },
      ],
    },
  });
}