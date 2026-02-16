import React from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/collectionCard'
import { clearCollection } from '../redux/features/collectionSlice'

const Collection = () => {
    const collections = useSelector((state) => state.collection.items)
    const dispatch = useDispatch()

    const clearAllCollection = ()=>{
        if(window.confirm("Are you sure want to clear the collection?")){
            dispatch(clearCollection())
        }
    }
    return (
        <div className='h-screen w-full bg-black text-white'>
            <Navbar title={'Collections'} />
            <div className='flex items-center justify-end px-5'>
                {collections && collections.length>0 && <button 
                onClick={()=>clearAllCollection()}
                className='bg-green-500 px-4 right-0 py-2 rounded-md active:scale-95 transition-all text-white font-semibold cursor-pointer '>clear</button>}
            </div>
            <div className='flex gap-5 flex-wrap justify-center mt-10'>
                {
                    collections && collections.length>0 ? collections.map((item, idx) => {
                        return (
                            <CollectionCard key={idx} item={item} />
                        )
                    }): <div className='font-semibold text-xl text-center'>No any saved collection!</div>
                }
            </div>
        </div>
    )
}

export default Collection