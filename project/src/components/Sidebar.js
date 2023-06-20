import React from 'react';
import CardGrid from './CardGrid';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className='py-8 px-2'> 
      <label htmlFor="my-drawer-2" className="lg:hidden">
      <i class="bi bi-list"></i>
      </label>
      </div>
    <div className="drawer-content flex flex-col py-8 px-2">
      <CardGrid/>
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-40 h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        <li><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt=''></img></li>
        <li><a href='/#'>About</a></li>
        <li><a href='/#'>Courses</a></li>
        <li><a href='/#'>Assignments</a></li>
        <li><a href='/#'>Tests</a></li>
        <li><Link to='/todo'>TODO</Link></li>
      </ul>
    
    </div>
  </div>
  );
};

export default Sidebar;
