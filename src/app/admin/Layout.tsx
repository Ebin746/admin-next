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
  // if (!session?.user) {
  //   return <Login />;
  // }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar /> {/* Sidebar always visible */}
      <main className="flex-grow p-6 bg-gray-200">{children}</main>
      {isLoading && <Loader />} {/* Loader for Redux loading state */}
    </div>
  );
};

export default Layout;
