import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Studentregister from './pages/Studentregister';
import Instructorregister from './pages/Instructorregister';
import Login from './pages/Login';
import Studentlanding from './pages/Studentlanding';
import Instructorlanding from './pages/Instructorlanding';
import Userselect from './pages/Userselect';
import Todo from './pages/Todo';
import {
    createHashRouter,
    RouterProvider,
  } from "react-router-dom";

const router=createHashRouter([
        {
            path: "/",
            element: <App/>,
        },
        {
            path: "userselect",
            element: <Userselect/>,
        },
        {
            path: "studentregister",
            element: <Studentregister/>,
        },
        {
            path: "instructorregister",
            element: <Instructorregister/>,
        },
        {
            path: "login",
            element:<Login/>,
        },
        {
            path: "studentlanding",
            element:<Studentlanding/>,
        },
        {
            path: "instructorlanding",
            element:<Instructorlanding/>,
        },
        {
            path: "todo",
            element:<Todo/>,
        },
])
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

