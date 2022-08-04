class ItcAccordion {
  constructor(target, config) {
    this._el =
      typeof target === "string" ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true,
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener("click", (e) => {
      const elHeader = e.target.closest(".accordion_header");
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector(".accordion_item_show");
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement
            ? elOpenItem.classList.toggle("accordion_item_show")
            : null;
        }
      }
      elHeader.parentElement.classList.toggle("accordion_item_show");
    });
  }
}

new ItcAccordion("#accordion-1");

const ctxOne = document.getElementById("myChart_one").getContext('2d');
const myChart_one = new Chart(ctxOne, {
  type: "doughnut",
  data: {
    datasets: [
      {
        label: "# of Votes",
        data: [165, 140, 30],
        backgroundColor: ["#E83C46", "#F9A620", "#474444"],
        borderColor: ["#E83C46", "#F9A620", "#474444"],
        borderWidth: 1,
      },
    ],
    labels: ["Россия", "Казахстан", "Узбекистан"],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Страны",
        align: "start",
      },
      legend: {
        position: "bottom",
        labels: {
          point: "circle",
        }
      },
    },
    cutout: 90,
    rotation: -90,
    legend: {
      position: "right",
    },
  },
});

Highcharts.chart("container", {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
  },
  title: {
    text: "Browser<br>shares<br>2017",
    align: "center",
    verticalAlign: "middle",
    y: 60,
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        distance: -50,
        style: {
          fontWeight: "bold",
          color: "white",
        },
      },
      startAngle: -90,
      endAngle: 90,
      center: ["50%", "75%"],
      size: "110%",
    },
  },
  series: [
    {
      type: "pie",
      name: "Browser share",
      innerSize: "50%",
      data: [
        ["Chrome", 58.9],
        ["Firefox", 13.29],
        ["Internet Explorer", 13],
        ["Edge", 3.78],
        ["Safari", 3.42],
        {
          name: "Other",
          y: 7.61,
          dataLabels: {
            enabled: false,
          },
        },
      ],
    },
  ],
});

const ctxThree = document.getElementById("myChart_three");
const myChart_three = new Chart(ctxThree, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {},
});

const ctxFour = document.getElementById("myChart_four");
const myChart_four = new Chart(ctxFour, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {},
});
