import React, { useState, useEffect } from 'react'
import Chart from "react-apexcharts";
import { tempSelector } from '../app/reducer/weatherSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const WeatherChart = (location) => {
    const tempArr = useSelector(tempSelector)
    //const dateObj = useDispatch(humanDate)
    const isLoading = useSelector(state => state.weatherReducer.foreLoading)
    const dispatch = useDispatch()
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
    useEffect(() => {
        if (isLoading === false) {
            setSeries([
                {
                    name: "Morning",
                    data: tempArr.morn
                },
                {
                    name: "Day",
                    data: tempArr.day
                },
                {
                    name: "Evening",
                    data: tempArr.eve
                },
                {
                    name: "Night",
                    data: tempArr.night
                },
            ])
        }
    }, [tempArr, isLoading])
    const [options, setOptions] = useState({
        chart: {
            toolbar: {
                show: false,
            },
            id: 'tempChart',
            height: 350,
            type: 'line',
            zoom: {
                enabled: true,
                type: 'x',
                autoScaleYaxis: true,
                zoomedArea: {
                    fill: {
                        color: '#90CAF9',
                        opacity: 0.4
                    },
                    stroke: {
                        color: '#0D47A1',
                        opacity: 0.4,
                        width: 1
                    }
                }
            },
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
        },
        colors: ['#fff', '#fff', '#fff', '#fff'],
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#000']
            },
            formatter: function (val){
                return val.toFixed(1) + '9\xB0C'
            }
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
           // text: 'Temperature',
            align: 'center',
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
           // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: ''
            },
            labels: {
                style: {
                    colors: ['#fff']
                },
                show: false
            },

        },
        yaxis: {
            tickPlacement: 'on',
            labels: {
                style: {
                    colors: ['#fff']
                },
                show: true
            },
            categories: [],
            title: {
                text: ''
            },
            tickAmount: 1,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    })

    return (
        <div className='w-full rounded-xl bg-slate-800'>
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
