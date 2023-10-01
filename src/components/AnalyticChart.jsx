import HighCharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const AnalyticChart = () => {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Analytics",
      align: "left",
    },
    colors: ["#D3CFFC", "#6E62E5", "#D3CFFC", "#6E62E5", "#D3CFFC", "#6E62E5"],

    xAxis: {
      type: "category",
      categories: ["1-10", "11-20", "21-30", "1-10", "10-20", "20-30"],
      title: {
        enabled: false,
      },
    },

    yAxis: {
      categories: [20, 40, 60],
      tickInterval: 20,
      startOnTick: true,
      gridLineWidth: 0,
      title: {
        enabled: false,
      },
    },

    series: [
      {
        name: "",
        data: [25, 45, 30, 55, 15, 35],
        showInLegend: false,
      },
    ],

    credits: {
      enabled: false,
    },
  };
  return (
    <div className="w-[100%] h-[20%]">
      <HighchartsReact highcharts={HighCharts} options={options} />
    </div>
  );
};

export default AnalyticChart;
