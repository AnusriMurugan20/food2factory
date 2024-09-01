import React from 'react';
import { Link } from "react-router-dom";
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import '../AdminChartBox/AdminChartBox.css';

const AdminChartBox = ({ color, icon, title, dataKey, number, percentage, chartData }) => {
  return (
    <div className='chartBox'>
       <div className="chartBox-boxInfo">
            <div className="chartBox-title">
                <span style={{ fontSize: "25px" }}>{icon}</span>
                <span>{title}</span>
            </div>
            <h1>{number}</h1>
            <Link to="/ViewAllUsers" style={{ color: color }}>View All</Link>
       </div>
       <div className="chart-Info">
        <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
                <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
                />
                <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} />
            </LineChart>
        </ResponsiveContainer>
        </div>
        <div className="chart-texts">
            <span className="chart-percentage" style={{ color: percentage < 0 ? "tomato" : "limegreen" }}>{percentage}%</span>
            <span className="chart-duration">this month</span>
        </div>
       </div>
    </div>
  );
}

export default AdminChartBox;
