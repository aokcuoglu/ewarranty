'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-white border-t border-gray-200 p-4 text-sm text-gray-500'>
      <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0'>
        <div>© {new Date().getFullYear()} egaranti</div>
        <div className='flex space-x-4'>
          <Link href='/kullanim-kosullari' className='hover:text-gray-700'>
            Kullanım Koşulları
          </Link>
          <Link href='/sikca-sorulan-sorular' className='hover:text-gray-700'>
            Sıkça Sorulan Sorular
          </Link>
          <Link href='/iletisim' className='hover:text-gray-700'>
            İletişim
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
