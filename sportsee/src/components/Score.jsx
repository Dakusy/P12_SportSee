import React from "react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
import "../css/Score.css";
import PropTypes from "prop-types";

/**
 * CustomizedLegend function is to get the customized legend in the middle of chart.
 * @param {*} payload is the source data of the content to be displayed in the legend, usually calculated internally.
 */
const CustomizedLegend = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className="custom-legend">
        <div className="score-title">Score</div>
        <h2 className="legend">{payload[0].value + "%"}</h2>
        <span>de votre</span>
        <span>objectif</span>
      </div>
    );
  }
  return null;
};

function Score({ score }) {
  const scorePercent = score?.score * 100;
  const value = [{ value: scorePercent }];
  return (
    <div className="circleChart chart-box">
      
      <ResponsiveContainer>
        
        <RadialBarChart
          innerRadius={800}
          outerRadius={100}
          barSize={8}
          data={value}
          startAngle={100}
          endAngle={0}
        >
          <RadialBar
            position="center"
            dataKey="value"
            fill="#ff0000"
            cornerRadius={10}
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="top"
            align="center"
            payload={value}
            content={<CustomizedLegend />}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Score;
Score.propTypes = {
  score: PropTypes.object,
};