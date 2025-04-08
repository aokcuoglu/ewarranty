'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, FileText, Phone } from 'lucide-react';

const ServicesContent = () => {
  return (
    <div className='space-y-8'>
      {/* Hero section */}
      <section className='bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6'>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold'>Hizmetler</h2>
          <p className='text-gray-600'>
            Uzatılmış garanti ve diğer hizmetlerimize buradan erişebilirsiniz.
          </p>
        </div>
        <div className='flex-shrink-0 relative h-48 w-48'>
          <Image
            src='/logo.png'
            alt='Hizmetler'
            fill
            className='object-contain'
            priority
          />
        </div>
      </section>

      {/* Services section */}
      <section className='space-y-4'>
        <h3 className='text-lg font-medium'>
          Uzatılmış garanti şimdi egaranti'de
        </h3>
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
                      Uzatılmış Garanti Satın Al
                    </h4>
                    <p className='text-sm text-gray-500'>
                      egaranti'deki ürünlerinize uzatılmış garanti satın
                      alabilir ve ömürlerini uzatabilirsiniz.
                    </p>
                  </div>
                </div>
                <Link href='/garantilerim' className='text-blue-600'>
                  <ChevronRight className='h-5 w-5' />
                </Link>
              </div>
              <div className='mt-4'>
                <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md'>
                  Hemen Satın Al
                </button>
              </div>
            </div>
          </div>

          {/* Phone Service Card */}
          <div className='bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden'>
            <div className='p-6'>
              <div className='flex justify-between items-start'>
                <div className='flex items-center gap-4'>
                  <div className='bg-blue-100 p-3 rounded-full'>
                    <Phone className='h-6 w-6 text-blue-600' />
                  </div>
                  <div>
                    <h4 className='font-medium text-base'>
                      Telefonuna Uzatılmış Garanti Yaptır
                    </h4>
                    <p className='text-sm text-gray-500'>
                      Telefonuna uzatılmış garanti yaptır, hırsızlığa karşı
                      önlemini al.
                    </p>
                  </div>
                </div>
                <Link href='/telefon-garanti' className='text-blue-600'>
                  <ChevronRight className='h-5 w-5' />
                </Link>
              </div>
              <div className='mt-4'>
                <button className='w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-md'>
                  Gelince Haber Ver
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fırsatlar section */}
      <section className='space-y-4'>
        <h3 className='text-lg font-medium'>Fırsatlar</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg shadow-sm p-6 text-white'>
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-xl font-bold mb-2'>
                  Uzatılmış garanti satın al, telefonunun ömrünü uzat 📱
                </h3>
                <button className='mt-4 bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100'>
                  Şimdi Keşfet
                </button>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg shadow-sm p-6 text-white'>
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-xl font-bold mb-2'>
                  Telefonuna uzatılmış garanti yaptır, hırsızlığa karşı önlemini
                  al 🔒
                </h3>
                <button className='mt-4 bg-white text-emerald-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100'>
                  Gelince Haber Ver
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesContent;
