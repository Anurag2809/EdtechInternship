import React from 'react';
import {FaComment} from "react-icons/fa"
import {AiOutlineNotification,AiOutlineIdcard,AiOutlineVerticalAlignTop} from "react-icons/ai"
import {IoIosCard} from "react-icons/io";
import {LuLogOut} from "react-icons/lu";
import Cardco from './Cardco'

const Sidebar1 = () => {
  return (
    <div className="drawer xl:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className='py-8 px-2'> 
      <label htmlFor="my-drawer-2" className="xl:hidden">
      <i class="bi bi-list"></i>
      </label>
      </div>
    <div className="drawer-content px-2">
      <div>
      <h1 className='text-center mb-2 mt-0 text-4xl font-medium leading-tight text-primary'>Web development</h1>
      <Cardco/>
      </div>
      <div>
        <h1 className='text-center mb-2 mt-0 text-4xl font-medium leading-tight text-primary'>Python</h1>
      <Cardco/>
      </div>
      

    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-40 h-full bg-base-200 text-base-content text-xl">
        {/* Sidebar content here */}
        <li className="p-4"><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt=''></img></li>
        <li ><a href='/#'><AiOutlineIdcard/>Profile</a></li>
        <li><a href='/#'><AiOutlineNotification/>Messages</a></li>
        <li><a href='/#'><IoIosCard/>Wallet</a></li>
        <li><a href='/#'><FaComment/>Chat</a></li>
        <li><a href='/#'><AiOutlineVerticalAlignTop/>Upload</a></li>
        <li><a href='/#'><LuLogOut/>Logout</a></li>
      </ul>
    
    </div>
  </div>
  );
};

export default Sidebar1;