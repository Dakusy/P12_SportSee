import React from "react";
import "../css/Session.css";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Tooltip,
  Legend,
  Line,
  Dot,
} from "recharts";
import PropTypes from "prop-types";

const CustomizedLegend = () => {
  return (
    <div className="custom-legend-session">
      <span>Durée moyenne des sessions</span>
    </div>
  );
};

const CustomizedKey = ({ cx, cy, payload }) => {
  return (
    <g>
      <Dot r={10} fill="white" cy={cy} cx={cx} opacity="0.5" />
      <Dot r={4} fill="white" cy={cy} cx={cx} />
      <text x={cx} y={cy - 20} textAnchor="middle" fill="#888">
        {payload.sessionLength}
      </text>
    </g>
  );
};

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].payload.sessionLength} minutes`}</p>
      </div>
    );
  }

  return null;
}

function Session({ sessions }) {
  return (
    <div className="lineChart  chart-box">
      <ResponsiveContainer>
        <LineChart
          width={730}
          height={250}
          data={sessions}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <Tooltip content ={<CustomTooltip/>}/>

          <XAxis dataKey="day" tickLine={false} axisLine={false} stroke="#FFFFFF" />
          <Legend
            iconSize={10}
            width={20}
            height={20}
            layout="vertical"
            verticalAlign="top"
            align="center"
            content={<CustomizedLegend />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            dot={""}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Session;
Session.propTypes = {
  sessions: PropTypes.array,
};
