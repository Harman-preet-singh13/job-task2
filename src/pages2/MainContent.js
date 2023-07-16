import React from 'react'
import img1 from "../images/Rectangle 293.png"
import img2 from "../images/Rectangle 296.png"
import img3 from "../images/Rectangle 298.png"
import img4 from "../images/Rectangle 300.png"
import img5 from "../images/Rectangle 302.png"



export default function MainContent() {
  return (
    <div className="m-5">
      {/* Search area */}

      <div className="">
        <div className="">
          <h1 className="font-semibold text-xl">
            Search for Jobs
          </h1>
        </div>
        <div className=" flex gap-4">

          <div className="grow w-96">
            <form >
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

          <div>
            <form className="">
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"></label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill text-slate-400" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 focus:ring-gray-200 focus:border-gray-200" placeholder="Anywhere" required />
              </div>
            </form>
          </div>

          <div>
            <form className="">
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Anywhere</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-filter text-slate-400" viewBox="0 0 16 16">
                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 focus:ring-gray-200 focus:border-gray-200" placeholder="Filters" required />
              </div>
            </form>
          </div>

        </div>

        <div>
          <div className="flex gap-5 mt-5">

            <div className="flex gap-2 bg-slate-50 p-1 px-3 drop-shadow-md border rounded-3xl">
              <div className="bg-gray-300 border rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </div>
              <button className="text-sm font-semibold">
                UX Design
              </button>
            </div>

            <div className="flex gap-2 bg-slate-50 p-1 px-3 drop-shadow-md border rounded-3xl">
              <div className="bg-gray-300 border rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </div>
              <button className="text-sm font-semibold">
                UX Design
              </button>
            </div>

            <div className="flex gap-2 bg-slate-50 p-1 px-3 drop-shadow-md border rounded-3xl">
              <div className="bg-gray-300 border rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </div>
              <button className="text-sm font-semibold">
                UX Design
              </button>
            </div>

            <div className="flex gap-2 bg-slate-50 p-1 px-3 drop-shadow-md border rounded-3xl">
              <div className="bg-gray-300 border rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </div>
              <button className="text-sm font-semibold">
                UX Design
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* content */}

      <div className="mt-10">
        <div className=" flex justify-between">
          <div>
            <h1 className=" text-2xl font-semibold">
              My Jobs
            </h1>
          </div>
          <div className=" text-center">
            <h1 className=" font-semibold">
              Job search status
            </h1>
            <div className=" px-2 py-1 bg-slate-50 border border-slate-400 rounded-lg">
              <h1 className="flex gap-1">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#22c522" height="14" className="m-1" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </div>
                <div>Actively Interviewing</div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" className="m-1" viewBox="0 0 448 512">
                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </div>


              </h1>
            </div>
          </div>
        </div>

        {/* Applications */}

        <div>
          <div className="my-2 p-2 h-auto max-w-full bg-white border border-gray-200 rounded-lg shadow-xl ">
            <h1 className="text-xl font-semibold">
              Applications
            </h1>
            <div>
              <div className="my-2 p-2 h-auto max-w-full bg-white border border-gray-200 rounded-lg shadow-xl ">
                <div className=" flex justify-between">
                  <div className="flex gap-2">
                    <div>
                      <img alt="company logo" src={img1} />
                    </div>
                    <div>
                      <h1 className="font-semibold">Product Designer</h1>
                      <h1 className=" text-slate-400 text-sm font-semibold">
                        Techmint, on-site
                      </h1>
                      <h1 className="text-slate-400 text-md font-semibold">
                        Bengaluru, India
                      </h1>
                    </div>
                  </div>

                  <div className="align-center">
                    <div className="text-center">
                      <h1 className="font-semibold">
                        ₹ 50k - ₹ 70k
                      </h1>
                      <h1 className=" text-xs text-slate-400 font-semibold">
                        Per month
                      </h1>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <div>
                        <h1 className="px-4 bg-red-300 text-sm text-red-600 font-semibold border rounded-xl drop-shadow-md">
                          Rejected
                        </h1>
                      </div>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-question-circle text-red-800" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-2 p-2 h-auto max-w-full bg-white border border-gray-200 rounded-lg shadow-xl ">
                <div className=" flex justify-between">
                  <div className="flex gap-2">
                    <div>
                      <img alt="company logo" src={img2} />
                    </div>
                    <div>
                      <h1 className="font-semibold">Product Designer</h1>
                      <h1 className=" text-slate-400 text-sm font-semibold">
                        Unacademy, Remote
                      </h1>
                      <h1 className="text-slate-400 text-md font-semibold">
                        Bengaluru, India
                      </h1>
                    </div>
                  </div>

                  <div className="align-center">
                    <div className="text-center">
                      <h1 className="font-semibold">
                        ₹ 60k - ₹ 80k
                      </h1>
                      <h1 className=" text-xs text-slate-400 font-semibold">
                        Per month
                      </h1>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-5 text-center">
                      <div>
                        <h1 className="px-4 bg-yellow-200 text-sm text-yellow-600 font-semibold border rounded-xl drop-shadow-md">
                          In Process
                        </h1>
                        <h1 className="text-xs font-semibold text-red-500">
                          70% Chances
                        </h1>
                      </div>
                      <div>
                          <h1></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-2 p-2 h-auto max-w-full bg-white border border-gray-200 rounded-lg shadow-xl ">
                <div className=" flex justify-between">
                  <div className="flex gap-2">
                    <div>
                      <img alt="company logo" src={img3} />
                    </div>
                    <div>
                      <h1 className="font-semibold">UX Designer</h1>
                      <h1 className=" text-slate-400 text-sm font-semibold">
                        TechNovus, On Site
                      </h1>
                      <h1 className="text-slate-400 text-md font-semibold">
                        Bengaluru, India
                      </h1>
                    </div>
                  </div>

                  <div className="align-center">
                    <div className="text-center">
                      <h1 className="font-semibold">
                        ₹ 60k - ₹ 80k
                      </h1>
                      <h1 className=" text-xs text-slate-400 font-semibold">
                        Per month
                      </h1>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-5 text-center">
                      <div>
                        <h1 className="px-4 bg-green-200 text-sm text-green-600 font-semibold border rounded-xl drop-shadow-md">
                          Selected
                        </h1>
                        <h1 className="text-xs font-semibold text-red-500">
                          
                        </h1>
                      </div>
                      <div>
                          <h1></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-2 p-2 h-auto max-w-full bg-white border border-gray-200 rounded-lg shadow-xl ">
                <div className=" flex justify-between">
                  <div className="flex gap-2">
                    <div>
                      <img alt="company logo" src={img4} />
                    </div>
                    <div>
                      <h1 className="font-semibold">Product Designer</h1>
                      <h1 className=" text-slate-400 text-sm font-semibold">
                        Udemy, On Site
                      </h1>
                      <h1 className="text-slate-400 text-md font-semibold">
                        Delhi, India
                      </h1>
                    </div>
                  </div>

                  <div className="align-center">
                    <div className="text-center">
                      <h1 className="font-semibold">
                        ₹ 60k - ₹ 80k
                      </h1>
                      <h1 className=" text-xs text-slate-400 font-semibold">
                        Per month
                      </h1>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-5 text-center">
                      <div>
                        <h1 className="px-4 bg-yellow-200 text-sm text-yellow-600 font-semibold border rounded-xl drop-shadow-md">
                          In Process
                        </h1>
                        <h1 className="text-xs font-semibold text-red-500">
                          80% Chances
                        </h1>
                      </div>
                      <div>
                          <h1></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-2 p-2 h-auto max-w-full bg-white border border-gray-200 rounded-lg shadow-xl ">
                <div className=" flex justify-between">
                  <div className="flex gap-2">
                    <div>
                      <img alt="company logo" src={img5} />
                    </div>
                    <div>
                      <h1 className="font-semibold">Product Designer</h1>
                      <h1 className=" text-slate-400 text-sm font-semibold">
                        URSA, On Site
                      </h1>
                      <h1 className="text-slate-400 text-md font-semibold">
                        Bengaluru, India
                      </h1>
                    </div>
                  </div>

                  <div className="align-center">
                    <div className="text-center">
                      <h1 className="font-semibold">
                        ₹ 60k - ₹ 80k
                      </h1>
                      <h1 className=" text-xs text-slate-400 font-semibold">
                        Per month
                      </h1>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-5 text-center">
                      <div>
                        <h1 className="px-4 bg-green-200 text-sm text-green-600 font-semibold border rounded-xl drop-shadow-md">
                          Selected
                        </h1>
                        <h1 className="text-xs font-semibold text-red-500">
                          
                        </h1>
                      </div>
                      <div>
                          <h1></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
