import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
const WeatherChart = () => {
    function generateDayWiseTimeSeries(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push([baseval, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    }
    const [chart, setChart] = useState({
        options: {
            chart: {
                height: 350,
                type: 'line',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
                toolbar: {
                    show: false
                }
            },
            colors: ['#53618c', '#2f3c66','#1e2a52'],
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: 'smooth',
                lineCap: 'round',
                dashArray: 0
            },
            tooltip: {
                enabled: true,
                enabledOnSeries: undefined,
                shared: true,
                followCursor: false,
                intersect: false,
                inverseOrder: false,
                custom: undefined,
                fillSeriesColor: false,
                theme: 'dark',
                style: {
                  fontSize: '12px',
                },
                onDatasetHover: {
                    highlightDataSeries: false,
                },
                x: {
                    show: true,
                    format: 'dd MMM',
                    formatter: undefined,
                },
                y: {
                    formatter: undefined,
                    title: {
                        formatter: (seriesName) => seriesName,
                    },
                },
                // marker: {
                //     show: true,
                // },
                items: {
                   display: 'flex',
                },
                fixed: {
                    enabled: false,
                    position: 'topRight',
                    offsetX: 0,
                    offsetY: 0,
                },
            },
            title: {
                text: 'Average High & Low Temperature',
                align: 'left'
            },
            grid: {
                show: false,
                borderColor: '#e7e7e7',
                position: 'back',
                // row: {
                //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                //     opacity: 0.5
                // },
            },
            markers: {
                size: 1
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                title: {
                    text: ''
                }
            },
            yaxis: {
                label:{
                    show: false
                },
                categories: [],
                title: {
                    text: ''
                },
                min: -50,
                max: 100
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            }
        },
        series: [{
            name: "Morning",
            data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
            name: "Evening",
            data: [12, 11, 14, 18, 17, 13, 13]
        },
        {
            name: "Night",
            data: [10, 4, 6, 12, 13, 9, 8]
        }],
    })
    return (
        <div className='w-full bg-red-100'>
            <Chart
                options={chart.options}
                series={chart.series}
                type="line"
                width="100%"
                height="350px"
            />
        </div>

    )
}

export default WeatherChart
