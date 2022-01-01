import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { newsSelector } from '../app/reducer/newsSlice'
import { getNews } from '../app/reducer/newsSlice'
const News = () => {
    const news = useSelector(newsSelector)
    const newsLoading = useSelector((state)=> state.newsReducer.isLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNews())
    }, [dispatch])
    if(newsLoading === true){
        return <div>Loading...</div>
    }
    return (
        <div className='flex flex-col'>
            <div className='grid grid-cols-4'>
                <div className='col-span-2 bg-slate-500'>
                    <a href="/" className='w-full h-full'>
                    </a>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default News
