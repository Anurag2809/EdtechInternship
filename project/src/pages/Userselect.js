import React from 'react';
import {Link} from 'react-router-dom';

const Userselect = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className='container-fluid p-4'>
    <div className="grid grid-cols-2 gap-4 max-w-3xl">
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/511/962/original/vector-student-glyph-black-icon.jpg"
            alt="Student"
            className="w-full h-60 p-2 object-cover"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Student</div>
            <p className="text-gray-700 text-base">
              Description of the student goes here.
            </p>
          </div>
          <div className="px-6 py-4">
            <Link to='/studentregister'><button className="btn btn-info w-full">
              Register as Student
            </button></Link>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3410/3410674.png"
            alt="Instructor"
            className="w-full h-60 p-2 object-cover"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Instructor</div>
            <p className="text-gray-700 text-base">
              Description of the instructor goes here.
            </p>
          </div>
          <div className="px-6 py-4">
            <Link to='/instructorregister'><button className="btn btn-info w-full">
              Register as Instructor
            </button></Link>
          </div>
        </div>
      </div>
      
        </div>
      </div>
  );
};

export default Userselect;
