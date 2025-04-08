'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Wrench, FileText } from 'lucide-react';

const DashboardContent = () => {
  return (
    <div className='space-y-8'>
      {/* Hero section */}
      <section className='bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6'>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold'>Garanti Süreçlerinizi Yönetin!</h2>
          <p className='text-gray-600'>
            Marka ile doğrudan iletişime geçerek sorunlarınızı hızlıca çözün!
          </p>
          <div className='mt-4'>
            <Link
              href='/taleplerim'
              className='bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700'>
              Taleplerim
            </Link>
          </div>
        </div>
        <div className='flex-shrink-0 relative h-48 w-48'>
          <Image
            src='/logo.png'
            alt='Garanti Yönetimi'
            fill
            className='object-contain'
            priority
          />
        </div>
      </section>

      {/* Services section */}
      <section className='space-y-4'>
        <h3 className='text-lg font-medium'>Hizmetler</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Extended Warranty Card */}
          <div className='bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden'>
            <div className='p-6'>
              <div className='flex justify-between items-start'>
                <div className='flex items-center gap-4'>
                  <div className='bg-blue-100 p-3 rounded-full'>
                    <FileText className='h-6 w-6 text-blue-600' />
                  </div>
                  <div>
                    <h4 className='font-medium text-base'>
                      Uzatılmış Garantilerim
                    </h4>
                    <p className='text-sm text-gray-500'>
                      Satın almış olduğunuz aktif/pasif uzatılmış garantileri
                      görüntüleyin.
                    </p>
                  </div>
                </div>
                <Link href='/garantilerim' className='text-blue-600'>
                  <ChevronRight className='h-5 w-5' />
                </Link>
              </div>
            </div>
          </div>

          {/* Service Requests Card */}
          <div className='bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden'>
            <div className='p-6'>
              <div className='flex justify-between items-start'>
                <div className='flex items-center gap-4'>
                  <div className='bg-blue-100 p-3 rounded-full'>
                    <Wrench className='h-6 w-6 text-blue-600' />
                  </div>
                  <div>
                    <h4 className='font-medium text-base'>Taleplerim</h4>
                    <p className='text-sm text-gray-500'>
                      Taleplerinizi görüntüleyebilir ve takip edebilirsiniz.
                    </p>
                  </div>
                </div>
                <Link href='/taleplerim' className='text-blue-600'>
                  <ChevronRight className='h-5 w-5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className='bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg shadow-sm p-6 text-white'>
        <div className='flex items-center justify-between'>
          <h3 className='text-xl font-bold'>
            Uzatılmış garanti şimdi egaranti'de 🙌
          </h3>
        </div>
      </section>

      {/* Brands section */}
      <section className='space-y-4'>
        <div className='flex justify-between items-center'>
          <h3 className='text-lg font-medium'>Markalar</h3>
          <div className='flex gap-2'>
            <button className='p-1 rounded-md border border-gray-200 hover:bg-gray-100'>
              <ChevronRight className='h-4 w-4 rotate-180' />
            </button>
            <button className='p-1 rounded-md border border-gray-200 hover:bg-gray-100'>
              <ChevronRight className='h-4 w-4' />
            </button>
          </div>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-center justify-center h-20'>
              <div className='text-gray-300 font-medium text-sm'>
                Brand Logo
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardContent;
