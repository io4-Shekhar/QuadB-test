import Chart from "react-apexcharts";
const ChartComponent = () => {
  const option = {
    series: [70, 30],
    colors: ["#3F9142", "#142E15"],
    chart: {
      type: "donut",
      //   offsetX: window.screen.width < 1500 ? 90 : 120,
    },
    // labels: data?.length > 0 ? data?.map((obj) => obj?.ca_name) : [],
    labels: ["Pending", "Done"],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: !true,
      formatter: function (val) {
        return val + "%";
      },
      // dropShadow: {
      //   ...
      // }
    },
    plotOptions: {
      pie: {
        donut: {
          size: "85%",
        },
      },
    },
    noData: {
      text: "No data found for the data range selected.",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        // fontSize: window.screen.width < 1500 ? "14px" : "18px",
        fontWeight: "bold",
        display: "block",
      },
    },
  };

  return (
    <>
      <Chart
        options={option}
        series={option.series}
        // width={widthGraph}
        type="donut"
      />
    </>
  );
};

export default ChartComponent;
