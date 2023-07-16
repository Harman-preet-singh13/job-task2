import React from 'react'
import Result from './Result'
import { Avatar } from '@mui/material'

export default function MainContent() {
  return (

    <div className=" ">


      <div>
        <Result />
      </div>

      {/* Header */}
      <div className="mt-4 flex justify-between lg:pr-3 xl:pr-44">

        <div className="flex gap-10">

          <div className="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-circle text-green-500 m-1" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
            <h1 className="text-green-500">
              deselect 3 rows
            </h1>
          </div>

          <div className=' flex pt-1 bg-neutral-200 border rounded-xl'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-up m-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
              </svg>
            </div>
            <div>
              <h1 className="font-medium">Sort by: newest first</h1>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down m-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
              </svg>
            </div>
          </div>
        </div>

        <button className="bg-green-500 text-white p-1 border rounded-xl font-bold">
          Bulk Actions
        </button>
      </div>

      {/* content */}
      <div className="flex justify-around mt-10 ml-5 ">
        {/* avatar-section */}
        <div className="flex gap">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle m-2 text-neutral-300" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            </svg>
          </div>
          <div className="flex gap-2">
            <div>
              <Avatar src="" />
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-bookmark-fill m-1 text-blue-600" viewBox="0 0 16 16">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                </svg>
                <div className="flex">
                  <div>
                    <h1 className="font-medium">Chikelu Obosea</h1>
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-clock m-1 text-slate-400" viewBox="0 0 16 16">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>
                  <div>
                    <h1 className=" m-1 text-xs text-slate-300">28 nov 2019</h1>
                  </div>
                </div>
              </div>

              <div className="pl-6">
                <h1 className="text-slate-500 text-sm">Full stack Ruby Developer</h1>
              </div>
            </div>


          </div>
        </div>

        {/* time */}
        <div>
          <h1 className="font-medium">New</h1>
          <h1 className="text-lg">*****</h1>
        </div>

        {/* emoji */}

        <div className="flex flex-col">
          <h1>
            😀
          </h1>
          <h1 className="text-xs font-bold text-green-400">
            81%
          </h1>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical m-1 text-slate-500" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
      </div>

      <div className="flex justify-around mt-10 ml-5 ">
        {/* avatar-section */}
        <div className="flex gap">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle m-2 text-neutral-300" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            </svg>
          </div>
          <div className="flex gap-2">
            <div>
              <Avatar src="" />
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-bookmark-fill m-1 text-slate-400" viewBox="0 0 16 16">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                </svg>
                <div className="flex">
                  <div>
                    <h1 className="font-medium">Chikelu Obosea</h1>
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-clock m-1 text-slate-400" viewBox="0 0 16 16">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>
                  <div>
                    <h1 className=" m-1 text-xs text-slate-300">28 nov 2019</h1>
                  </div>
                </div>
              </div>

              <div className="pl-6">
                <h1 className="text-slate-500 text-sm">Full stack Ruby Developer</h1>
              </div>
            </div>


          </div>
        </div>

        {/* time */}
        <div>
          <h1 className="font-medium">New</h1>
          <h1 className="text-lg">*****</h1>
        </div>

        {/* emoji */}

        <div className="flex flex-col">
          <h1>
            😀
          </h1>
          <h1 className="text-xs font-bold text-green-400">
            81%
          </h1>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical m-1 text-slate-500" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
      </div>

      <div className="flex justify-around mt-10 ml-5 ">
        {/* avatar-section */}
        <div className="flex gap">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-fill m-2 text-green-500" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
          </div>
          <div className="flex gap-2">
            <div>
              <Avatar src="" />
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-bookmark-fill m-1 text-blue-600" viewBox="0 0 16 16">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                </svg>
                <div className="flex">
                  <div>
                    <h1 className="font-medium">Chikelu Obosea</h1>
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-clock m-1 text-slate-400" viewBox="0 0 16 16">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                  </div>
                  <div>
                    <h1 className=" m-1 text-xs text-slate-300">28 nov 2019</h1>
                  </div>
                </div>
              </div>

              <div className="pl-6">
                <h1 className="text-slate-500 text-sm">Full stack Ruby Developer</h1>
              </div>
            </div>


          </div>
        </div>

        {/* time */}
        <div>
          <h1 className="font-medium">New</h1>
          <h1 className="text-lg">*****</h1>
        </div>

        {/* emoji */}

        <div className="flex flex-col">
          <h1>
            😀
          </h1>
          <h1 className="text-xs font-bold text-green-400">
            81%
          </h1>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical m-1 text-slate-500" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
      </div>

    </div>
  )
}
