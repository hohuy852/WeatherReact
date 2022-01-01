import { Nav, News, Weather } from '../components'
import { ErrorBoundary } from "../App";
import React, { useEffect } from 'react'
const Home = () => {
    return (
        <div className="container text-white">
            <Nav/>
            <Weather />
            <News />
        </div>
    )
}

export default Home
