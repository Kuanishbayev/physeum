import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'

const NavbarSignIn = () => {
  return (
    <nav className='flex justify-between p-4 shadow-[0_2px_20px_0_#0129701A]'>
        <div className='flex items-center'>
            <div className='text-[#012970] font-semibold text-2xl mr-48'>Physeum</div>
            <FiMenu fill='#012970' size={30} />
            <label className='ml-2 flex items-center rounded-md border-2 overflow-hidden w-[320px]'>
                <input type="text" placeholder='Izlash' className='outline-none p-2 grow' />
                <BsSearch fill='#012970' className='mr-2' />
            </label>
        </div>
        <div className='flex items-center'>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0001 32.36C25.4832 32.36 32.3601 25.4831 32.3601 17C32.3601 8.51691 25.4832 1.64 17.0001 1.64C8.51704 1.64 1.64014 8.51691 1.64014 17C1.64014 25.4831 8.51704 32.36 17.0001 32.36Z" stroke="#012970" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
            <path d="M20.1573 23.7379C20.1406 23.5542 20.1285 23.2592 20.1189 22.9533C22.8997 22.6685 24.8504 22.0016 24.8504 21.2246C24.8427 21.2234 24.8434 21.1926 24.8434 21.1798C22.7646 19.3066 26.6456 5.99392 19.4206 6.264C18.9669 5.88 18.1726 5.53888 17.0334 5.53888C7.24719 6.27936 11.5742 18.8509 9.34447 21.224C9.34319 21.2246 9.34127 21.2246 9.33999 21.2246C9.33999 21.2259 9.34063 21.2272 9.34063 21.2285L9.33999 21.2298L9.34127 21.2304C9.35023 21.9914 11.235 22.6461 13.9352 22.9379C13.9275 23.1235 13.9115 23.3533 13.8763 23.7379C13.0558 25.944 8.78319 26.0822 6.41455 28.2768C7.70927 29.407 12.2206 32.4419 17.0603 32.4419C21.9 32.4419 25.9192 30.145 27.5218 28.2128C25.148 26.0803 20.9694 25.9222 20.1573 23.7379Z" fill="#012970"/>
          </svg>
          <span className='pl-2'>K.Shiyrin</span>
          <IoIosArrowDown />
        </div>
    </nav>
  )
}

export default NavbarSignIn