import { BsGraphUp, BsListCheck } from 'react-icons/bs'
import { FaDatabase } from 'react-icons/fa'
import { LuLogOut, LuSettings } from 'react-icons/lu'
import { RxDashboard } from 'react-icons/rx'

const SidebarSignIn = () => {
  return (
    <div className='shadow-2xl w-[300px]'>
        <ul className='flex flex-col gap-4 p-6'>
            <li className='flex items-center gap-2'>
                <RxDashboard className='text-[#899BBD]' />
                <span className='text-[#012970] nunito-font font-semibold'>Bas bet</span>
            </li>
            <li className='flex items-center gap-2'>
                <BsGraphUp fill='#899BBD' />
                <span className='text-[#012970] nunito-font font-semibold'>Tayarlanıw</span>
            </li>
            <li className='flex items-center gap-2'>
                <FaDatabase fill='#899BBD' />
                <span className='text-[#012970] nunito-font font-semibold'>Resurslar</span>
            </li>
            <li className='flex items-center gap-2'>
                <BsListCheck fill='#899BBD' />
                <span className='text-[#012970] nunito-font font-semibold'>Test</span>
            </li>
            <li className='flex items-center gap-2'>
                <LuSettings stroke='#899BBD' />
                <span className='text-[#012970] nunito-font font-semibold'>Sazlawlar</span>
            </li>
            <li className='flex items-center gap-2'>
                <LuLogOut stroke='#899BBD' />
                <span className='text-[#012970] nunito-font font-semibold'>Shıǵıw</span>
            </li>
        </ul>
    </div>
  )
}

export default SidebarSignIn