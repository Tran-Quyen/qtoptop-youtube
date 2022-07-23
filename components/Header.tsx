import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '~/utils/logo192.png';

const Header = ({}) => {
  return (
    <nav className='w-full flex justify-between items-center border-b-2 bg-gray-200 py-2 px-4'>
      <Link href='/'>
        <div className='flex items-center'>
          <div className='w-[40px]'>
            <Image
              src={Logo}
              className='w-[100px] cursor-pointer'
              alt='QTopTop Logo'
              layout='responsive'
            />
          </div>
          <span className='ml-2 text-4xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>
            TopTop
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default Header;

