import React from 'react';

import {
  createBrowserRouter,

} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPages from '../pages/ErrorPages/ErrorPages';
import Home from '../pages/Home/Home';
import My_Bookings from '../pages/My-Bookings/My_Bookings';
import LawyerDetails from '../pages/LawyerDetails/LawyerDetails';


export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPages></ErrorPages>,
      children: [
        {
            index: true,
            loader:()=>fetch("/LawyersData.json"),
            path: "/",
            Component: Home
        },
        {
          path:'/My_Bookings',
          loader:()=>fetch("/LawyersData.json"),
          Component: My_Bookings
        },
        {
          path:'/lawyerDetails/:id',
          loader:()=>fetch("/LawyersData.json"),
          Component: LawyerDetails
        }
      ]
    },
  ]);