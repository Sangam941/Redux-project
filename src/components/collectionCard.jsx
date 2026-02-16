import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, removeCollection } from '../redux/features/collectionSlice'
import toast from 'react-hot-toast'

const CollectionCard = ({ item }) => {

    const dispatch = useDispatch()
    const removeFromCollection = (item)=>{
        if(window.confirm('Are you sure want to delete this collection!')){
            dispatch(removeCollection(item))
        }           
    }
    return (
        <a href={item.url} className='w-56 h-52 bg-white outline-none relative cursor-pointer'>
            <div className='h-full w-full'>
                {item.type === 'Photos' ? <img className='h-full w-full object-center object-cover' src={item.src} /> : ''}
                {item.type === 'Videos' ? <video className='h-full w-full object-center object-cover' src={item.src} autoPlay loop muted></video> : ''}
            </div>
            <div className='absolute bottom-2 text-white left-2'>
                <h1 className='font-semibold text-lg shadow-md'>{item.title}</h1>
                <div className='save flex justify-end px-2'>
                <button
                onClick={()=>removeFromCollection(item)}
                className='bg-red-600 rounded-lg active:scale-95 transition-all text-white font-semibold cursor-pointer px-3 py-1'>remove</button>
                </div>
            </div>
        </a>
    )
}

export default CollectionCard