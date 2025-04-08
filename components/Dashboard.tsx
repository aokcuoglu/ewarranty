'use client';

import React, { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface DashboardProps {
  children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
        <div className='flex flex-col flex-1'>
          <Header />
          <main className='flex-1 overflow-y-auto p-6 bg-gray-50'>
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
