import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { locationAdded } from '../app/reducer/weatherSlice'
const Nav = () => {
    const dispatch = useDispatch()
    const [location, setLocation] = useState('')
    const handleKeyDown = (e) => {
        const trimmedText = location.trim()
        if (e.which === 13 && trimmedText) {
            e.preventDefault()
            dispatch(locationAdded(trimmedText))
            setLocation('')
        }

    }
    return (
        <div className="pt-5 pb-10 text-black">
            <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <input type="text" className="px-4 py-2 w-80 rounded-lg" placeholder="Weather in your city" value={location} onChange={(e) => { setLocation(e.target.value) }} onKeyDown={handleKeyDown} />
                    <div className="absolute top-2 right-3"> <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                        </path>
                    </svg> </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
