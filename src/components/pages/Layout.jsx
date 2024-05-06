import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'

const Layout = () => {
  return (
    <div className="bg-black text-white w-full min-h-screen px-[5rem] overflow-hidden">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout