import { Nav, News, Weather } from '../components'
import { ErrorBoundary } from "../App";
import WeatherChart from '../components/WeatherChart';
import React, { useEffect } from 'react'
const Home = () => {
    return (
        <div className="container text-white">
            <Nav />
            <Weather />
            <WeatherChart />
            <News />
        </div>
    )
}

export default Home
