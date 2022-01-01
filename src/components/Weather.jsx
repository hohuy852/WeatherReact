import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWeather, weatherSelector } from '../app/reducer/weatherSlice'
import Forecast from './Forecast'
const Weather = () => {
    const dispatch = useDispatch()
    const isLoadingStatus = useSelector((state) => state.weatherReducer.isLoading)
    const weatherData = useSelector(weatherSelector)
    const locationData = useSelector(state => state.weatherReducer.data)
    useEffect(() => {
        // const getPosition = (location) => {
        //     locationData.lon = location.coords.latitude
        //     locationData.lat = location.coords.longitude
        // }
        // navigator.geolocation.getCurrentPosition(getPosition)
        dispatch(getWeather(locationData))
    }, [dispatch, locationData])
    if (isLoadingStatus === true) {
        return <div>Loading</div>
    }
    return (
        <div className='flex flex-col gap-y-3'>
            <div className='grid grid-cols-4'>
                <div className='col-span-2 pl-4 pb-4 rounded-xl bg-teal-900 w-full text-white flex flex-col gap-y-3'>
                    <div className='uppercase font-semibold pt-4'>
                        Current Weather
                    </div>
                    <span className='font-medium'>
                        {weatherData.name}
                    </span>
                    <small className='font-medium'>{(() => {
                        let date = new Date()
                        return date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
                    })()}</small>
                    <div className='flex gap-x-4'>
                        <img src={'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png'} alt="" />
                        <div className='flex justify-center'>
                            <span className='h-full text-7xl'>{Math.round(weatherData.main.temp)}</span>
                            <span className='h-full text-3xl'>&#8451;</span>
                        </div>
                        <div>
                        </div>
                        <div className='flex flex-col mt-3 text-xl'>
                            <div>
                                {weatherData.weather[0].main}
                            </div>
                            <div>
                                Feel like {weatherData.main.feels_like}&#8451;
                            </div>
                        </div>
                    </div>
                    <div className='text-lg font-medium'>
                        There will be {weatherData.weather[0].description} in your area. Highest temperature is {weatherData.main.temp_max}&#8451;.
                    </div>
                    <div className='flex justify-center font-medium'>
                        <div className='flex flex-col w-full items-center'>
                            <div>
                                Wind
                            </div>
                            <div>
                                {Math.round((weatherData.wind.speed * 3.6).toFixed(2))} km/h
                            </div>
                        </div>
                        <div className='flex  flex-col w-full items-center '>
                            <div>
                                Humidity
                            </div>
                            <div>
                                {weatherData.main.humidity}%
                            </div>
                        </div>
                        <div className='flex flex-col w-full items-center'>
                            <div>
                                Vision
                            </div>
                            <div>
                                {Math.round(weatherData.visibility / 1000)} km
                            </div>
                        </div>
                        <div className='flex flex-col w-full items-center'>
                            <div>
                                Pressure
                            </div>
                            <div>
                                {weatherData.main.pressure} mb
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='font-medium uppercase'>
                Forecast for the next 7 days
            </div>
            <Forecast />
            <div>

            </div>
        </div>
    )
}


export default Weather
