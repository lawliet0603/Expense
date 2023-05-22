import React from "react";
import ChartBar from "./ChartBar";
import "./Style/Chart.css";
const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            maxValue={maxValue}
            label={dataPoint.label}
            key={dataPoint.id}
          />
        );
      })}
    </div>
  );
};

export default Chart;
