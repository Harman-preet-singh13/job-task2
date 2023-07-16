import Navbar from './Navbar';
import SubSidebar from './SubSidebar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';



function Task1() {
  return (
    <>
      <div className=' m-10 grid grid-cols-3 gap-2 bg-neutral-200'>
        <div className=" col-start-1 col-span-3">
          <Navbar />
        </div>
        <div className=" row-start-1 row-span-3 col-end-1 w-16">
          <SubSidebar />
        </div>
        <div className=" row-start-2 ">
          <Sidebar />
        </div>
        <div className=" row-start-2 col-span-2 bg-white border rounded-lg mr-10">
          <MainContent />
        </div>
      </div>

    </>
  )
}

export default Task1;
