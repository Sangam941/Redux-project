import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    // const data = useSelector()

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(setQuery(search))
        // setSearch('')
    }
  return (
    <div>
        <form 
        onSubmit={(e)=>handleSubmit(e)}
        className='flex gap-3'>
            <input 
            onChange={(e)=>setSearch(e.target.value)}
            value={search}
            type="text" className='w-full border-[1px] px-3 py-2 rounded-md outline-none' placeholder='Search anything...' />
            <button className="submit px-5 py-2 outline-none font-semibold border-[1px] rounded-md cursor-pointer">Search</button>
        </form>
    </div>
  )
}

export default SearchBar