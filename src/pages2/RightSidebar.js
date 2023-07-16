import React from 'react'
import img1 from "../images/image 40.png"
import img2 from "../images/Group 26.png"
import "./style.css"

export default function RightSidebar() {
  return (
    <div className="">
      {/* Upper section */}

      <div className=" md:m-3 xl:m-10 md:mt-5 xl:mt-5">
        <div className="p-2 h-auto max-w-full bg-white border border-gray-200 rounded-lg shadow-xl ">

          <div className=" flex justify-center gap-2">
            <div>
              <img
                alt="upper section image"
                src={img1}
                className=" lg:max-w- xl:max-w-lg "
              />
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-three-dots-vertical " viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </div>
          </div>

          <div className="mt-5 flex justify-between">
            <div >
              <h1 className="font-semibold">
                Suggested Sessions
              </h1>
            </div>

            <div>
              <h1 className="text-sm text-blue-800">
                <a href="#">See all</a>
              </h1>
            </div>
          </div>

          <div className="">
            <div class="grid grid-cols-1 divide-y">
              <div>
                <div className=" my-5 flex justify-between">
                  <div className="text-center">
                    <h1 className="font-semibold md:text-sm xl:text-base">
                      Mock interview
                    </h1>
                    <h1 className="font-semibold text-slate-500 text-xs">
                      20th August, 2022
                    </h1>
                    <h1 className="font-semibold md:text-sm xl:text-base ">
                      (09:00 AM - 11:00 AM)
                    </h1>
                  </div>
                  <div>
                    <button className=" bg-orange border rounded-lg drop-shadow-2xl md:text-xs md:p-1 xl:text-base">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className=" my-5 flex justify-between">
                  <div className="text-center">
                    <h1 className="font-semibold md:text-sm xl:text-base">
                      Mock interview
                    </h1>
                    <h1 className="font-semibold text-slate-500 text-xs">
                      20th August, 2022
                    </h1>
                    <h1 className="font-semibold md:text-sm xl:text-base ">
                      (09:00 AM - 11:00 AM)
                    </h1>
                  </div>
                  <div>
                    <button className=" bg-orange border rounded-lg drop-shadow-2xl md:text-xs md:p-1 xl:text-base">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className=" my-5 flex justify-between">
                  <div className="text-center">
                    <h1 className="font-semibold md:text-sm xl:text-base">
                      Mock interview
                    </h1>
                    <h1 className="font-semibold text-slate-500 text-xs">
                      20th August, 2022
                    </h1>
                    <h1 className="font-semibold md:text-sm xl:text-base ">
                      (09:00 AM - 11:00 AM)
                    </h1>
                  </div>
                  <div>
                    <button className=" bg-orange border rounded-lg drop-shadow-2xl md:text-xs md:p-1 xl:text-base">
                      Enroll Now
                    </button>
                  </div>
                </div></div>
            </div>
          </div>
        </div>
      </div>


      {/* below section */}


      <div className=" md:m-3 xl:m-10 md:mt-10 xl:mt-0">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-xl">
              Upcoming Events
            </h1>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </div>
        </div>

        <div className="p-2 h-auto max-w-full bg-white border border-gray-200 rounded-lg shadow-xl ">
          <div className="">
            <div className=" text-right">
              <button className="px-2 bg-slate-200 text-sm border rounded-xl">
                <div className="flex">
                  <div>
                    August, 2022
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short m-1" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                    </svg>
                  </div>
                </div>


              </button>
            </div>

          </div>

          <div className="my-2 p-2 h-auto max-w-full bg-white border border-gray-200 rounded-lg shadow-xl ">
            <div className=" flex justify-between">
              <div>
                <img alt="company logo" src={img2} />
              </div>
              <div>
                <div className="p-2 text-center h-auto max-w-full bg-white border border-gray-200 rounded-lg shadow-xl">
                  <h1 className=" text-sm font-semibold">
                    Portfolio Presentaion
                  </h1>
                  <h1 className=" text-sm text-red-500">
                    Tomorrow
                  </h1>
                  <h1 className=" text-sm font-semibold">
                    9:00 AM - 10:00 AM
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="my-2 p-2 h-auto max-w-full bg-white border border-gray-200 rounded-lg shadow-xl ">
            <div className=" flex justify-between">
              <div>
                <img alt="company logo" src={img2} />
              </div>
              <div>
                <div className="p-2  text-center h-auto max-w-full bg-white border border-gray-200 rounded-lg shadow-xl">
                  <h1 className=" text-sm font-semibold">
                    Portfolio Presentaion
                  </h1>
                  <h1 className=" text-sm text-red-500">
                    Tomorrow
                  </h1>
                  <h1 className=" text-sm font-semibold">
                    9:00 AM - 10:00 AM
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="my-2 p-2 h-auto max-w-full bg-white border border-gray-200 rounded-lg shadow-xl ">
            <div className=" flex justify-between">
              <div>
                <img alt="company logo" src={img2} />
              </div>
              <div>
                <div className="p-2  text-center h-auto max-w-full bg-white border border-gray-200 rounded-lg shadow-xl">
                  <h1 className=" text-sm font-semibold">
                    Portfolio Presentaion
                  </h1>
                  <h1 className=" text-sm text-red-500">
                    Tomorrow
                  </h1>
                  <h1 className=" text-sm font-semibold">
                    9:00 AM - 10:00 AM
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
