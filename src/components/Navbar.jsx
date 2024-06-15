import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-4 shadow-[0_2px_20px_0_#0129701A]'>
        <div className='flex items-center'>
            <div className='text-[#012970] font-semibold text-2xl mr-48'>Physeum</div>
            <FiMenu fill='#012970' size={30} />
            <label className='ml-2 flex items-center rounded-md border-2 overflow-hidden w-[320px]'>
                <input type="text" placeholder='Izlew' className='outline-none p-2 grow' />
                <BsSearch fill='#012970' className='mr-2' />
            </label>
        </div>
        <div>
            <button className='bg-[#0D6EFD] px-5 py-2.5 rounded-md text-white mr-5'>Dizimnen ótiw</button>
            <button className='bg-[#6C757D] px-5 py-2.5 rounded-md text-white'>Kiriw</button>
        </div>
    </nav>
  )
}

export default Navbar