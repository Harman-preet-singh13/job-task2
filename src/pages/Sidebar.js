import React from 'react'
import Switch, { SwitchProps } from '@mui/material/Switch';


export default function Sidebar() {
  return (
    <div className="m-2 pt-16 h-screen">
      <div className="text-3xl font-bold">
        <h1>Applications</h1>
      </div>

      <div className="m-5 pt-10 pl-8">
        <h1 className="text-xl font-bold">Filters</h1>
      </div>

      <div className="flex">
        <div >
          <Switch defaultChecked color="success" />
        </div>
        <div className="pt-1">
          <h1 className="text-slate-500 font-semibold">Show rejected applications</h1>
        </div>
      </div>

      <div className="flex">
        <div >
          <Switch defaultChecked color="success" />
        </div>
        <div className="pt-1">
          <h1 className="text-slate-500 font-semibold">Show only subscribed applications</h1>
        </div>
      </div>




      <div className="m-5 pt-10 pl-8">
        <div className="flex gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-circle mt-1" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          <div className="">
            <h1 className="text-slate-500 font-semibold">JOBS</h1>
          </div>
        </div>

        <div className="flex gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-circle mt-1" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          <div className="">
            <h1 className="text-slate-500 font-semibold">JOBS DOMAINS</h1>
          </div>
        </div>

        <div className="flex gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-circle mt-1" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          <div className="">
            <h1 className="text-slate-500 font-semibold">SCORE</h1>
          </div>
        </div>

        <div className="flex gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-circle mt-1" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          <div className="">
            <h1 className="text-slate-500 font-semibold">APPLICATION DATE</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
