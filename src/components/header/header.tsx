'use client';
// IMPORT HOOKS
import React, { useState, useEffect, memo } from 'react';
// IMPORT UI
import Link from 'next/link';
// import { Transition } from '@headlessui/react';
import { Menu, MenuHandler, MenuList, MenuItem, Button } from '@material-tailwind/react';
import { Dropdown, MenuProps, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';

function Header() {
  // DEFINE
  const router = useRouter();
  const cookies = useCookies();
  const accessToken = cookies.get('accessToken');

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div className="px-5 text-left text-[18px] font-semibold">
          <Link href="#" className="text-primary hover:text-[#E50914]">
            Profile
          </Link>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div
          className="px-5 text-left text-primary text-[18px] font-semibold hover:text-[#E50914]"
          onClick={() => {
            cookies.remove('accessToken');
          }}
        >
          Đăng xuất
        </div>
      ),
    },
  ];

  return (
    <div>
      <nav className="bg-black">
        <div className="max-w-screen-lg mx-auto px-3 md:px-4 sm:px-6 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  className="lg:h-8 lg:w-[150px] h-5 w-[100px]"
                  src="/assets/mylogo.png"
                  alt="Workflow"
                />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-5">
                <Link
                  href="/schedule"
                  className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-[18px] font-medium uppercase"
                >
                  Lịch chiếu
                </Link>
                <Link
                  href="/movie"
                  className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-[18px] font-medium uppercase"
                >
                  Phim
                </Link>
                <Link
                  href="#"
                  className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-[18px] font-medium uppercase"
                >
                  Ưu đãi
                </Link>
                <Link
                  href="#"
                  className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-[18px] font-medium uppercase"
                >
                  Tin tức phim
                </Link>
                <Link
                  href="#"
                  className="text-white hover:bg-[#E50914] hover:text-white px-3 py-2 rounded-md text-[18px] font-medium uppercase"
                >
                  Thành viên
                </Link>
              </div>
            </div>
            {accessToken ? (
              <div className="pl-14">
                <Dropdown menu={{ items }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space className="!text-[#7e8eaa] !hover:text-[#E50914] !text-[18px] !font-medium">
                      nguyen
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            ) : (
              <div className="pl-14">
                <Link
                  href="/auth/login"
                  className="text-[#7e8eaa] hover:text-[#E50914] text-[14px] font-medium uppercase"
                >
                  Đăng nhập / Đăng ký
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* <div className="z-50">
          <Transition
            show={isOpen}
            className="bg-black"
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="lg:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <Link
                    href="/booking"
                    className="hover:bg-gray-700 text-white block px-3 py-[2px] rounded-md text-[18px] font-medium"
                  >
                    MUA VÉ
                  </Link>

                  <Link
                    href="/movie"
                    className="text-white hover:bg-gray-700 hover:text-white block px-3 py-[2px] rounded-md text-[18px] font-medium"
                  >
                    PHIM
                  </Link>

                  <Link
                    href="/cinema"
                    className="text-white hover:bg-gray-700 hover:text-white block px-3 py-[2px] rounded-md text-[18px] font-medium"
                  >
                    RẠP CHIẾU
                  </Link>

                  <Link
                    href="/blog&event"
                    className="text-white hover:bg-gray-700 hover:text-white block px-3 py-[2px] rounded-md text-[18px] font-medium"
                  >
                    GÓC ĐIỆN ẢNH & SỰ KIỆN
                  </Link>

                  <Link
                    href="/support"
                    className="text-white hover:bg-gray-700 hover:text-white block px-3 py-[2px] rounded-md text-[18px] font-medium"
                  >
                    HỖ TRỢ
                  </Link>
                  <Link
                    href="/search"
                    className="text-white hover:bg-gray-700 hover:text-white block px-3 py-[2px] rounded-md text-[18px] font-medium"
                  >
                    TÌM KIẾM
                  </Link>
                </div>
              </div>
            )}
          </Transition>
        </div> */}
      </nav>
    </div>
  );
}

export default memo(Header);
