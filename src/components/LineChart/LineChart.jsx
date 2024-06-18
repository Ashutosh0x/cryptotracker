import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import './LineChart.css'; // Import CSS file for custom styling

const LineChart = ({ historicalData }) => {
    const [data, setData] = useState([]);
    const [animate, setAnimate] = useState(false); // State to control initial animation

    useEffect(() => {
        if (historicalData && historicalData.prices) {
            const formattedData = historicalData.prices.map(item => {
                return [new Date(item[0]), item[1]];
            });

            // If there's no data yet, animate once when data arrives
            if (!data.length && formattedData.length) {
                setAnimate(true); // Trigger animation
            }

            setData([["Date", "Prices"], ...formattedData]);
        }
    }, [historicalData]);

    const options = {
        hAxis: {
            title: 'Time',
            titleTextStyle: { color: '#ffffff' },
            textStyle: { color: '#ffffff' }
        },
        vAxis: {
            title: 'Prices',
            titleTextStyle: { color: '#ffffff' },
            textStyle: { color: '#ffffff' }
        },
        backgroundColor: { // Example of using gradients for background
            fill: 'none',
            gradient: {
                color1: '#2a2a2a',
                color2: '#1e1e1e',
                angle: 270,
                opacity: 0.9
            }
        },
        chartArea: {
            backgroundColor: {
                fill: '#1e1e1e',
                fillOpacity: 0.1
            },
            width: '80%',
            height: '70%'
        },
        colors: ['#39ff14'], // Modern neon color
        lineWidth: 3, // Increased line width for a bolder look
        pointSize: 6, // Larger point size for emphasis
        animation: {
            startup: true,
            easing: 'out', // Easing function for initial animation
            duration: 1500,
        },
        legend: {
            position: 'none'
        }
    };

    return (
        <div className="chart-container"> {/* Container with custom CSS */}
            <Chart
                chartType="LineChart"
                data={data}
                options={options}
                width="100%"
                height="400px"
            />
        </div>
    );
};

export default LineChart;
