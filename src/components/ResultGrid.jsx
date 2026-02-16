import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setErrors, setLoading, setResults } from '../redux/features/searchSlice'
import ResultCard from './ResultCard'


const ResultGrid = () => {

    const dispatch = useDispatch()
    const { activeTab, query, results, loading, error } = useSelector((store) => store.search)

    let data
    const getData = async () => {
        dispatch(setLoading())
        try {
            if (activeTab === 'Photos') {
                const res = await fetchPhotos(query)
                data = res.results.map((item) => ({
                    id: item.id,
                    title: item.alt_description,
                    type: 'Photos',
                    thumbnail: item.urls.small,
                    src: item.urls.full,
                    url: item.html
                }))
                console.log(data)
            } else if (activeTab === 'Videos') {
                const res = await fetchVideos(query)
                data = res.videos.map((item) => ({
                    id: item.id,
                    title: item.user.name || query,
                    type: 'Videos',
                    thumbnail: item.image,
                    src: item.video_files[0].link,
                    url: item.url
                }))
                console.log(data)
            }
            dispatch(setResults(data))
        } catch (err) {
            dispatch(setErrors(err.message))
        }
    }


    useEffect(() => {
        if(!query || query == "") return 
        getData()
    }, [query, activeTab])

    if (error) return <h1>Error</h1>
    if (loading) return <h1 className='text-xl font-semibold text-center mt-50'>Loading...</h1>
    return (
        <div>
            {results && results.length>0 && query? 
            <div className='flex gap-5 flex-wrap justify-center mt-10'>
            {results?.map((item, idx) => {
                return (
                    // <div key={idx}>{item.title}</div>
                    <ResultCard key={idx} item={item}/>
                )
            })}
        </div>:<div className='mt-5 font-semibold text-xl text-center'>No any results found!</div>
        }
        </div>
    )
}

export default ResultGrid