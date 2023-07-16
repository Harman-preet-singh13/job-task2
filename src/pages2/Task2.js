import React from 'react'
import Navbar from "./Navbar"
import LeftSidebar from "./LeftSidebar"
import MainContent from "./MainContent"
import RightSidebar from "./RightSidebar"

export default function Task2() {
  return (
    <div className="grid grid-cols-12">
        
        <div className="col-span-12 drop-shadow-xl">
            <Navbar />
        </div>

        <div className="col-span-1 w-28 shadow-2xl">
            <LeftSidebar />
        </div>

        <div className="col-span-8 md:ml-10 xl:ml:0">
            <MainContent />
        </div>

        <div className="col-span-3">
            <RightSidebar />
        </div>

    </div>
  )
}
