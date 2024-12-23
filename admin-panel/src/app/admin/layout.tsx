"use client"
import Loader from "@/components/admin-apnel/loader";
import Login from "@/components/admin-apnel/login";
import Sidebar from "@/components/admin-apnel/sidebar";
import { useAppSelector } from "@/redux/hook";
import { useSession } from  "next-auth/react";
import React from 'react';

const layout = ({children}: {children: React.ReactNode}) => {
    const isLoading = useAppSelector(store => store.loading);
    const {data: session} = useSession();

    if(!session?.user){
      return <Login/>;
    }

  return <div className="flex">
    <Sidebar />
  <div className="w-full h-full">
    {/* Navbar/> */} 
  <div className="bg-gray-200 p-4 h-[cals(100vh-64px)]">{children}</div>
  </div>
  {isLoading && <Loader />}
  </div >
};

export default layout;
