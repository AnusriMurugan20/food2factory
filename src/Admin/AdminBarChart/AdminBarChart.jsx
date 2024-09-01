import React from 'react';
import "../AdminBarChart/AdminBarChart.css";
import { ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts';

const AdminBarChart = ({ title, color, dataKey, chartData }) => {
  return (
    <div className='barChartBox'>
        <h1>{title}</h1>
        <div className='barChart'>
        <ResponsiveContainer width="99%" height={150}>
            <BarChart width={150} height={40} data={chartData}>
                <Tooltip
                    contentStyle={{backgroundColor: "#2a3447", borderRadius: "5px"}}
                    labelStyle={{ display: "none" }}
                    cursor={{fill:"none"}}
                />
                <Bar dataKey={dataKey} fill={color} />
            </BarChart>
        </ResponsiveContainer>
        </div>
    </div>
  );
}

export default AdminBarChart;
