'use client';

import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  MessageSquare,
  Search,
  Filter,
  Plus,
} from 'lucide-react';

// Define types
type StatusType = 'Devam Ediyor' | 'Tamamlandı' | 'Beklemede';
type PriorityType = 'Yüksek' | 'Orta' | 'Düşük';

interface ServiceRequest {
  id: string;
  title: string;
  status: StatusType;
  date: string;
  priority: PriorityType;
}

const TaleplerimContent = () => {
  // Sample service requests data
  const serviceRequests: ServiceRequest[] = [
    {
      id: 'SR-001',
      title: 'iPhone 14 Pro Ekran Sorunu',
      status: 'Devam Ediyor',
      date: '15 Haziran 2023',
      priority: 'Yüksek',
    },
    {
      id: 'SR-002',
      title: 'Samsung TV Ses Problemi',
      status: 'Tamamlandı',
      date: '10 Mayıs 2023',
      priority: 'Orta',
    },
    {
      id: 'SR-003',
      title: 'Laptop Şarj Sorunu',
      status: 'Beklemede',
      date: '2 Nisan 2023',
      priority: 'Düşük',
    },
  ];

  // Function to get status color
  const getStatusColor = (status: StatusType): string => {
    switch (status) {
      case 'Devam Ediyor':
        return 'bg-yellow-100 text-yellow-800';
      case 'Tamamlandı':
        return 'bg-green-100 text-green-800';
      case 'Beklemede':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  // Function to get priority color
  const getPriorityColor = (priority: PriorityType): string => {
    switch (priority) {
      case 'Yüksek':
        return 'bg-red-100 text-red-800';
      case 'Orta':
        return 'bg-orange-100 text-orange-800';
      case 'Düşük':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className='space-y-8'>
      {/* Hero section */}
      <section className='bg-white rounded-lg shadow-sm p-6'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div>
            <h2 className='text-2xl font-bold'>Taleplerim</h2>
            <p className='text-gray-600 mt-1'>
              Tüm servis taleplerinizi buradan yönetebilirsiniz.
            </p>
          </div>
          <button className='mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 py-2 px-4 rounded-md'>
            <Plus size={16} />
            <span>Yeni Talep Oluştur</span>
          </button>
        </div>
      </section>

      {/* Search and filter section */}
      <section className='bg-white rounded-lg shadow-sm p-4'>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='relative flex-grow'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <Search className='h-5 w-5 text-gray-400' />
            </div>
            <input
              type='text'
              className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='Taleplerde ara...'
            />
          </div>
          <div className='flex gap-2'>
            <button className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
              <Filter className='h-4 w-4 mr-2' />
              Filtrele
            </button>
            <select className='block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md'>
              <option>Tüm Talepler</option>
              <option>Devam Eden</option>
              <option>Tamamlanan</option>
              <option>Beklemede</option>
            </select>
          </div>
        </div>
      </section>

      {/* Requests list */}
      <section className='bg-white rounded-lg shadow-sm overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Talep ID
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Başlık
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Durum
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Tarih
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Öncelik
                </th>
                <th scope='col' className='relative px-6 py-3'>
                  <span className='sr-only'>İşlemler</span>
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {serviceRequests.map((request) => (
                <tr key={request.id} className='hover:bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    {request.id}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {request.title}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                        request.status
                      )}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {request.date}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(
                        request.priority
                      )}`}>
                      {request.priority}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                    <Link
                      href={`/taleplerim/${request.id}`}
                      className='text-blue-600 hover:text-blue-900'>
                      Detay
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {serviceRequests.length === 0 && (
          <div className='py-8 text-center'>
            <MessageSquare className='mx-auto h-12 w-12 text-gray-400' />
            <h3 className='mt-2 text-sm font-medium text-gray-900'>
              Henüz bir talep bulunmuyor
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
              Yeni bir servis talebi oluşturmak için burayı tıklayın.
            </p>
            <div className='mt-6'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                <Plus className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
                Yeni Talep
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Pagination */}
      <div className='flex items-center justify-between bg-white px-4 py-3 sm:px-6 rounded-lg shadow-sm'>
        <div className='flex flex-1 justify-between sm:hidden'>
          <button className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'>
            Önceki
          </button>
          <button className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'>
            Sonraki
          </button>
        </div>
        <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
          <div>
            <p className='text-sm text-gray-700'>
              <span className='font-medium'>3</span> talepten{' '}
              <span className='font-medium'>1</span> -{' '}
              <span className='font-medium'>3</span> arası gösteriliyor
            </p>
          </div>
          <div>
            <nav
              className='isolate inline-flex -space-x-px rounded-md shadow-sm'
              aria-label='Pagination'>
              <button className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
                <span className='sr-only'>Önceki</span>
                <ChevronRight
                  className='h-5 w-5 rotate-180'
                  aria-hidden='true'
                />
              </button>
              <button
                aria-current='page'
                className='relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                1
              </button>
              <button className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
                <span className='sr-only'>Sonraki</span>
                <ChevronRight className='h-5 w-5' aria-hidden='true' />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaleplerimContent;
