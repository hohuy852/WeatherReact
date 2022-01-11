import React, { useState, useEffect } from 'react'
import Chart from "react-apexcharts";
import { tempSelector } from '../app/reducer/weatherSlice';
import { useSelector } from 'react-redux';

const WeatherChart = () => {
    const tempArr = useSelector(tempSelector)
    //    useEffect(()=>{
    //         console.log(tempArr)
    //    },[tempArr])
    const [series, setSeries] = useState([
        {
            name: "Day",
            data: [0, 0, 0, 0, 0]
        },
        {
            name: "Morning",
            data: [0, 0, 0, 0, 0]
        },
        {
            name: "Evening",
            data: [0, 0, 0, 0, 0]
        },
        {
            name: "Night",
            data: [0, 0, 0, 0, 0]
        },
    ])
    const [options, setOptions] = useState({
            chart: {
                id: 'tempChart',
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
            colors: ['#53618c', '#2f3c66', '#1e2a52'],
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
                // borderColor: '#e7e7e7',
                // strokeDashArray: 0,
                position: 'back',
                // row: {
                //     colors: ['#000', 'transparent'], // takes an array which will be repeated on columns
                //     opacity: 0.2
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
                label: {
                    show: false
                },
                categories: [],
                title: {
                    text: ''
                },
                tickAmount: 1,
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

    )
    return (
        <div className='w-full bg-red-100'>
            <Chart
                options={options}
                series={series}
                type="line"
                width="100%"
                height="350px"
            />
        </div>

    )
}

export default WeatherChart
