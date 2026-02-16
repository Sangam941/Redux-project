import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['Photos', 'Videos', 'GIF']

    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>state.search.activeTab)
    console.log(activeTab)
  return (
    <div className='flex gap-4 font-semibold mt-10'>
        {tabs.map((item, index)=>{
            return (
                <button 
                onClick={()=>{
                    dispatch(setActiveTabs(item))
                }}
                key={index} className={`${activeTab == item ? 'bg-green-600' : 'bg-zinc-500'} px-3 py-2 rounded-md cursor-pointer transition active:scale-95`}>{item}</button>
            )
        })}
    </div>
  )
}

export default Tabs