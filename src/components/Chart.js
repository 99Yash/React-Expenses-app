import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMax=Math.max(...dataPointValues);//math max only works for numbers not objects. the upper step is done to convert that
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar 
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMax} 
        label={dataPoint.label} />
      ))}
    </div>
  );
};

export default Chart;
