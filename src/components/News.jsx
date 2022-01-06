import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newsSelector, firstNews, selectNews } from '../app/reducer/newsSlice'
import { getNews } from '../app/reducer/newsSlice'
const News = () => {
    const news = useSelector(newsSelector)
    const hightLightNews = useSelector(firstNews)
    const newsLoading = useSelector((state) => state.newsReducer.isLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNews())
        //console.log(hightLightNews)

    }, [dispatch])
    if (newsLoading === true ) {
        return <div>Loading...</div>
    }

    return (
        <div className='flex flex-col'>
            <div className='font-medium py-3'>
                NEWS
            </div>
            <div className='grid grid-cols-4 gap-x-2 gap-y-2' >
                <div className='col-span-2 w-full h-card bg-slate-500 rounded-xl shadow-lg' style={{ backgroundImage: `url(${hightLightNews.urlToImage})` }} key={hightLightNews.title}>
                    <a href={hightLightNews.url} className='w-full flex flex-col justify-end h-full' rel="noreferrer" target='_blank'>
                        <div className='flex flex-col pl-4 pb-6'>
                            <div>{hightLightNews.source.name}</div>
                            <div>{hightLightNews.title}</div>
                        </div>
                    </a>
                </div>
                {
                    news.map((data) => (
                        <div className='col-span-1 h-card bg-slate-500 w-full rounded-xl  shadow-lg' style={{ backgroundImage: `url(${data.urlToImage})`, backgroundSize: 'cover' }} key={data.title}>
                            <a href={data.url} className='w-full flex flex-col justify-end h-full' rel="noreferrer" target='_blank'>
                                <div className='flex flex-col pl-4 pb-6 bg-gradient-to-b from-transparent via-slate-700 rounded-xl to-slate-800 max-h-32'>
                                    <div>{data.source.name}</div>
                                    <div>{data.title}</div>
                                </div>
                            </a>
                        </div>))
                }
                <div>
                </div>
            </div>
        </div>
    )
}

export default News
