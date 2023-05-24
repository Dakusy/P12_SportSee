import React from "react";
import "../css/Session.css"
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

// Dot source: https://recharts.org/en-US/api/Dot 
const CustomizedKey = ({ cx, cy }) => {
  return (
      <g>
      <Dot r={10} fill='white'cy={cy} cx={cx} opacity='0.5'/>
      <Dot r={4} fill='white'cy={cy} cx={cx}/>
      </g>
  )
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
          <Tooltip />
          <XAxis dataKey="day" tickLine={false} axisLine={false} stroke="#FFFFFF"/>
          <Legend
            iconSize={10}
            width={20}
            height={20}
            layout="vertical"
            verticalAlign="top"
            align="center"
            content={<CustomizedLegend />}
          />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" activeDot={<CustomizedKey/>}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Session;
Session.propTypes = {
  sessions: PropTypes.array,
};