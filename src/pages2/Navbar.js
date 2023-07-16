import React from 'react'
import Avatar from '@mui/material/Avatar';
import "./style.css"

export default function Navbar() {
  return (
    <div className=" bg-blue">
      <nav>
        <div className="  max-w-screen-xl flex flex-wrap justify-between items-center lg:mx-auto p-2">

        <div>
          <h1 className="text-white text-3xl pr-20">
            AVIATE
          </h1>
        </div>
          <div className=" grow">
            <form className="">
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search...</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 focus:ring-gray-200 focus:border-gray-200" placeholder="Search..." required />
              </div>
            </form>
          </div>
          <div className="pl-10 flex gap-5">
            <div>
              <a href="#" className=" flex item-center py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:text-black md:p-0 " aria-current="page">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bell text-white" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg>
              </a>
            </div>

            <div>
              <a href="#" className=" flex item-center py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:text-black md:p-0 " aria-current="page">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chat-left text-white" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                </svg>
              </a>
            </div>

            <div>
              <a href="#" className=" flex item-center py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:text-black md:p-0 " aria-current="page">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-award text-white" viewBox="0 0 16 16">
                  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                </svg>
              </a>
            </div>
          </div>


          <div>

            <div className=" pl-5 flex gap-1">
              <div className=" m-2">
                <Avatar alt="user avatar" src="" />
              </div>
              <div>
                <h1 className=" text-white">
                  Akash Mishra
                </h1>
                <button className=" p-1 text-xs text-black bg-slate-100 border rounded-md">
                  EDIT MY PROFILE
                </button>
              </div>
            </div>

          </div>

        </div>
      </nav>
    </div>
  )
}
