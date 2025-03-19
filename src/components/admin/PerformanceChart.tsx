import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
    { name: 'Oct 2021', Achieved: 6, Target: 4 },
    { name: 'Nov 2021', Achieved: 7, Target: 5 },
    { name: 'Dec 2021', Achieved: 5, Target: 6 },
    { name: 'Jan 2022', Achieved: 8, Target: 4 },
    { name: 'Feb 2022', Achieved: 6, Target: 5 },
    { name: 'Mar 2022', Achieved: 4, Target: 3 },
];

const PerformanceChart = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Achieved" stroke="#ff7300" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Target" stroke="#387908" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default PerformanceChart;