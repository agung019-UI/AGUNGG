"use client"
import Login from "@/components/admin-apnel/login";
import { useAppSelector } from "@/redux/hook";
import { useSession } from  "next-auth/react";
import React from 'react';

const layout = () => {
    const isLoading = useAppSelector(store => store.loading);
    const {data: session} = useSession();

    if(!session?.user){
      return <Login/>;
    }

  return <div>layout</div>;
}

export default layout;
