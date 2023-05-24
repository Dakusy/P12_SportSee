import React from "react";
import { Tooltip, ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar, barSize, } from "recharts";
import PropTypes from "prop-types";

import "../css/Activity.css"

/**
 * CustomTooltip function is used to display specific values when the mouse hovers on any bars.
 * Code source: https://recharts.org/en-US/examples/CustomContentOfTooltip 
 * @param {*} payload is the source data of the content to be displayed in the tooltip, usually calculated internally.
 * @param {*} active format is boolean, if set true, the tooltip is displayed. If set false, the tooltip is hidden, usually calculated internally.
 */

const CustomTooltip = ({ payload, active }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip-line">
                <p className="desc">{payload[0].value + "kg"}</p>
                <p className="desc">{payload[1].value + "Kcal"}</p>
            </div>
        );
    }
    return null;
};

/**
 * This formatXAxis function is to get the scale value (tickFormatter)of the XAxis
 */
const formatXAxis = (item, i) => {
    return i + 1;
};

function Activity({ activity }) {
    return (
        <div className="barChart">
            <div className="barChart-detail">
                <p className="barChart-title">Activité quotidienne</p>
                <div className="custom-tooltip-legend">
                    <div className="kilogram">
                        <div className="blackRound"></div>
                        <p className="desc-legend">Poids (kg)</p>
                    </div>

                    <div className="calories">
                        <div className="redRound"></div>
                        <p className="desc-legend">Calories brûlées (kCal)</p>
                    </div>
                </div>
            </div>
            <div style={{ width: "100%", height: 200 }}>
                <ResponsiveContainer>
                    <BarChart data={activity}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            dataKey="day"
                            tickFormatter={formatXAxis}
                            axisLine={false}
                            tickLine={false}
                            domain={["dataMin", "dataMax"]}
                            tick={{ stroke: "#9B9EAC" }}
                        />

                        <YAxis
                            orientation="right"
                            tickCount={3}
                            domain={["dataMin - 1", "dataMax"]}
                            dataKey="kilogram"
                            axisLine={false}
                            tickLine={false}
                            tickMargin={30}
                            tick={{ stroke: "#9B9EAC" }}
                        />
                        <YAxis
                            tickCount={6}
                            domain={[0, 600]}
                            dataKey="calories"
                            axisLine={false}
                            tickLine={false}
                            tick={false}
                            hide={true}
                            yAxisId="cl"
                        />
                        <Tooltip
                            cursor={{ fill: "#C4C4C4", opacity: "0.5" }}
                            content={<CustomTooltip />}
                            offset={35}
                        />

                        <Bar
                            dataKey="kilogram"
                            fill="#282D30"
                            radius={[10, 10, 0, 0]}
                            unit="kg"
                            barSize={10}
                        />
                        <Bar
                            dataKey="calories"
                            fill="#E60000"
                            radius={[10, 10, 0, 0]}
                            unit="kCal"
                            yAxisId="cl"
                            barSize={10}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Activity;
Activity.propTypes = {
    activity: PropTypes.array
};
