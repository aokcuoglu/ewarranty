'use client';

import React from 'react';
import { Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className='py-6 px-8 bg-white'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-medium'>Hoş geldin</h1>
        <div className='flex items-center'>
          <Bell className='h-5 w-5 text-gray-600' />
        </div>
      </div>
    </header>
  );
};

export default Header;
