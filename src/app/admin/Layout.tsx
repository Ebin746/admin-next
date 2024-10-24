"use client";
import React from 'react';
import Login from '@/components/admin-panel/Login';
import { useAppSelector } from '@/redux/hooks';
import { useSession } from 'next-auth/react';
import Loader from '@/components/admin-panel/Loader';
import Sidebar from '@/components/admin-panel/sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isLoading = useAppSelector((store) => store.loading);
  const { data: session, status } = useSession();

  // Check if the session is loading
  if (status === 'loading') {
    return <Loader />;
  }

  // Check if user is authenticated
  if (!session?.user) {
    return <Login />;
  }

  return (
   
    <div className="flex">

      <div className="w-full h-full">
        <div className="bg-gray-200 p-4 h-[calc(100vh-64px)]">{children}</div>
      </div>
      {isLoading && <Loader />} {/* Loader while Redux state is loading */}
    </div>
  );
};

export default Layout;
