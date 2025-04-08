'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  LogOut,
  Package,
  Settings,
  User,
  ChevronDown,
  ChevronUp,
  FileText,
  MessageSquare,
} from 'lucide-react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  const [showHizmetlerSubmenu, setShowHizmetlerSubmenu] = useState(true);

  return (
    <aside className='w-64 bg-white border-r border-gray-200 flex flex-col'>
      <div className='p-4 px-6'>
        <Link href='/'>
          <Image src='/logo.png' alt='egaranti' width={150} height={32} />
        </Link>
      </div>

      <div className='px-6'>
        <Separator />
      </div>

      <nav className='mt-3 h-full px-6 w-full'>
        <ul>
          <li className='relative space-y-1'>
            <Link
              className={`flex items-center ${
                pathname === '/'
                  ? 'bg-[#CCDBFA] text-[#0049e6]'
                  : 'hover:bg-[#F2F5F9] hover:text-[#111729]'
              } gap-[15px] rounded-lg px-[19px] py-[15px]`}
              href='/'>
              <Home className='w-6 h-6' />
              <span>Anasayfa</span>
            </Link>

            <Link
              className={`flex items-center gap-[15px] rounded-lg px-[19px] py-[15px] ${
                pathname === '/urunlerim'
                  ? 'bg-[#CCDBFA] text-[#0049e6]'
                  : 'hover:bg-[#F2F5F9] hover:text-[#111729]'
              }`}
              href='/urunlerim'>
              <Package className='w-6 h-6' />
              <span>Ürünlerim</span>
            </Link>

            <div className='relative'>
              <button
                onClick={() => setShowHizmetlerSubmenu(!showHizmetlerSubmenu)}
                className={`flex items-center justify-between w-full gap-[15px] rounded-lg px-[19px] py-[15px] ${
                  pathname.startsWith('/hizmetlerim') ||
                  pathname.startsWith('/taleplerim')
                    ? 'bg-[#CCDBFA] text-[#002573]'
                    : 'hover:bg-[#F2F5F9] hover:text-[#111729]'
                }`}>
                <div className='flex items-center gap-[15px]'>
                  <Settings className='w-6 h-6 text-[#002573]' />
                  <span>Hizmetler</span>
                </div>
                {showHizmetlerSubmenu ? (
                  <ChevronUp className='w-4 h-4' />
                ) : (
                  <ChevronDown className='w-4 h-4' />
                )}
              </button>

              {showHizmetlerSubmenu && (
                <div className='pl-12'>
                  <Link
                    className={`flex items-center ${
                      pathname === '/services'
                        ? 'text-[#0040C9]'
                        : 'hover:bg-[#F2F5F9] hover:text-[#111729]'
                    } -ml-4 px-3 rounded-lg py-3`}
                    href='/services'>
                    <span>Uzatilmis Garanti</span>
                  </Link>

                  <Link
                    className={`flex items-center ${
                      pathname === '/claims'
                        ? 'text-[#0040C9]'
                        : 'hover:bg-[#F2F5F9] hover:text-[#111729]'
                    } -ml-4 px-3 rounded-lg py-3`}
                    href='/claims'>
                    <span>Taleplerim</span>
                  </Link>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>

      <div className='p-4 mt-auto'>
        <Button
          variant='ghost'
          className='w-full py-6 rounded-lg text-[#677389]'>
          <LogOut className='w-6 h-6 mr-2 font-bold' />
          <span className=' hover:text-[#111729] hover:bg-[#F2F5F9] text-md font-normal'>
            Çıkış Yap
          </span>
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
