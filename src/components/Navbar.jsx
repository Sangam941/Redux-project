import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({title}) => {
    return (
        <nav className='bg-purple-600 font-semibold px-3 py-4 mb-5 flex items-center justify-between'>
            <h1 className='text-3xl'>{title}</h1>
            <div className="route flex gap-3">
                <Link to={'/'} className='cursor-pointer bg-zinc-200 rounded-md p-2 text-purple-500'>Search</Link>
                <Link to={'/collection'} className='cursor-pointer bg-zinc-200 rounded-md p-2 text-purple-500'>Collection</Link>
            </div>
        </nav>
    )
}

export default Navbar