import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {

    const { query } = useSelector((store) => store.search)
    return (
        <div className='h-screen w-full bg-black text-white'>
            <Navbar title= {'Media Search'}/>
            <div className='px-5'>
                <SearchBar />
                {query ? <Tabs /> : ""}
                <ResultGrid />
            </div>
        </div>
    )
}

export default Home