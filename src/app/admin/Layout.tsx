"use client"
import Login from '@/components/admin-panel/Login'
import { useAppSelector } from '@/redux/hooks'
import { useSession } from 'next-auth/react';
import Loader from '@/components/admin-panel/Loader';
import React from 'react';
const Layout = ({children}:{children:React.ReactNode}) => {
    const isLoading=useAppSelector((store)=>store.loading);
    const {data:session}=useSession();
    if(!session?.user){
        return <Login></Login>
    }
  return (

    <div className="flex">
      <div className="w-full h-full">
      <div className='bg-gray-200 p-4 h-[calc(100vh-64px)]'>{children}</div>
      </div>
      {isLoading && <Loader/>}
    </div>
  )
}

export default Layout