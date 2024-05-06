import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="w-full ">
        <nav className=" flex items-center justify-between">
          <div className="flex items-center py-2 gap-2">
            <img src="./img/Logo.png" alt="logo" className='w-12' />
            <h1 className="text-3xl font-bold">Movies<span className='text-[#e50914]'>.</span></h1>
          </div>
          <div className="flex gap-6 text-[#d2d0d0] font-light">
            <Link to="/" className='text-white font-medium'>Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/genre">Genre</Link>
            <Link to="/news">News</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/shows">TV Shows</Link>
          </div>
        </nav>
      </div>
  );
}

export default NavBar