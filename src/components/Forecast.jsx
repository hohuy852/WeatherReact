import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getForecast, selectForecastDate } from '../app/reducer/weatherSlice'
const Forecast = () => {
    const isLoading = useSelector((state) => state.weatherReducer.foreLoading)
    const dispatch = useDispatch()
    const forcastData = useSelector(selectForecastDate)
    const locationData = useSelector((state)=>state.weatherReducer.data)
    useEffect(() => {
        dispatch(getForecast(locationData))
    }, [dispatch, locationData])
    if (isLoading === true) {
        return <div>Loading</div>
    }
    return (
        <div className='flex'>
            {
                forcastData.map((date) => (
                    <div className='flex flex-col w-full rounded-xl bg-slate-800 ml-2 px-4 pt-2' key={date.dt}>
                        <span>{(() => {
                            let dateObject = new Date(date.dt * 1000)
                            let humanDate = dateObject.toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric' })
                            return humanDate
                        })()}</span>
                        <div className='flex '>
                            <div className='flex'>
                                <img src={'http://openweathermap.org/img/wn/' + date.weather[0].icon + '@2x.png'} alt="" />
                                <div className='flex flex-col my-auto'>
                                    <div className='h-full font-medium text-2xl'>
                                        {Math.round(date.temp.max)}&deg;
                                    </div>
                                    <div className='h-full font-thin text-2xl'>
                                        {Math.round(date.temp.min)}&deg;
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-end justify-center w-full'>
                                <span>{date.weather[0].main}</span>

                                <div className='flex items-center gap-x-2'>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moisture" viewBox="0 0 16 16">
                                        <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z" />
                                    </svg>
                                    <div>
                                        {date.humidity}%
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Forecast
