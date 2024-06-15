import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import NavbarSignIn from '../components/NavbarSignIn'
import SidebarSignIn from '../components/SidebarSignIn'
import fizika_9_Img from '../assets/book-images/fizika-9.png'
import fizika_10_Img from '../assets/book-images/fizika-10.png'
import fizika_11_Img from '../assets/book-images/fizika-11.png'
import { LuSettings } from 'react-icons/lu'
import profileImg from '../assets/person-images/female.png'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DashboardSignIn = () => {
  const percentage = 87
  return (
    <div className='flex flex-col h-screen'>
        <NavbarSignIn />
        <div className='flex grow'>
          <SidebarSignIn />
          <div className='bg-[#F1F4FB] grow w-full p-8'>
            <div className='mb-8'>
                <p className='text-[#012970] font-semibold text-2xl nunito-font'>Bosh sahifa</p>
                <p className='text-[#899BBD] nunito-font'>Bosh sahifa /</p>
            </div>
            <div className='mb-8 flex justify-between gap-8'>
              <div className='bg-white grow p-8 shadow-[0_0_30px_0_#0000001A] rounded-[8px]'>
                <p className='font-semibold text-xl text-[#0D6EFD] mb-8'>Ta'lim tizimi</p>
                <ul>
                  <li className='flex gap-8'>
                    <div className='size-[64px] rounded-full bg-[#0D6EFDBF] flex justify-center items-center text-white text-2xl font-bold'>01</div>
                    <div>
                      <p className='text-[#4A92FE] font-bold text-xl'>Teoriya o'zlashtirish</p>
                      <p className='text-[#939393]'>mutaxassislarning maqolalarini o'qish</p>
                      <p className='text-[#939393]'>~o'qish vaqti: 15 daqiqa</p>
                    </div>
                  </li>
                  <li>
                    <div className='w-2 h-16 bg-[#DCDCDC] rounded-full ml-7 my-4'></div>
                  </li>
                  <li className='flex gap-8'>
                    <div className='size-[64px] rounded-full bg-[#DCDCDC] flex justify-center items-center text-white text-2xl font-bold'>02</div>
                    <div>
                      <p className='text-[#494947] font-bold text-xl'>Test (Matching)</p>
                      <p className='text-[#939393]'>Matching shaklida testdan o'ting</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='relative overflow-hidden bg-[#0D6EFD] text-white flex flex-col items-center p-8 w-[300px] shadow-[0_0_30px_0_#0000001A] rounded-[8px]'>
                <p className='font-bold text-lg text-center z-[1]'>Natijangizning o'rtacha foizi</p>
                <CircularProgressbar
                  className='z-[1] montserrat-font size-3/4'
                  value={percentage}
                  text={`${percentage}%`}
                  styles={
                    {
                      path: {
                        stroke: '#fff',
                        strokeWidth: '4px'
                      },
                      trail: {
                        stroke: '#012970CC',
                        strokeWidth: '2px'
                      },
                      text: {
                        fill: '#012970CC',
                        fontSize: '30px',
                        fontWeight: 700
                      }
                    }
                  }
                />
                <div className='absolute -left-1/2 top-1/2 border border-[#012970CC] w-[255px] h-[150px] rounded-[100%] flex items-center'>
                  <div className='bg-[#012970CC] w-[240px] h-[140px] rounded-[100%]'></div>
                </div>
                <div className='absolute -right-1/2 border border-[#012970CC] w-[270px] h-[150px] rounded-[100%] flex items-center justify-end'>
                  <div className='bg-[#012970CC] w-[260px] h-[140px] rounded-[100%]'></div>
                </div>
              </div>
            </div>
            <div className='bg-white p-8 shadow-[0_0_30px_0_#0000001A] rounded-[8px]'>
              <p className='text-[#0D6EFD] font-semibold'>Resurslar:</p>
              <p className='text-[#939393]'>Nazariyani o'rganish uchun elektron kitoblar</p>
              <div className='flex items-center'>
                <div>
                  <img src={fizika_9_Img} alt="Book image" />
                </div>
                <div>
                  <img src={fizika_10_Img} alt="Book image" />
                </div>
                <div>
                  <img src={fizika_11_Img} alt="Book image" />
                </div>
              </div>
              </div>
              <div className='flex mt-8 gap-8'>
                <div className='overflow-hidden relative bg-[#0D6EFD] text-white flex flex-col items-center p-8 w-[300px] shadow-[0_0_30px_0_#0000001A] rounded-[8px]'>
                  <p className='font-bold text-2xl'>Sozlamalar</p>
                  <LuSettings className='grow size-40 z-[1]' />
                  <div className='absolute -left-1/2 border border-[#012970CC] w-[255px] h-[150px] rounded-[100%] flex items-center'>
                    <div className='bg-[#012970CC] w-[240px] h-[140px] rounded-[100%]'></div>
                  </div>
                  <div className='absolute -right-1/2 top-1/2 border border-[#012970CC] w-[270px] h-[150px] rounded-[100%] flex items-center justify-end'>
                    <div className='bg-[#012970CC] w-[260px] h-[140px] rounded-[100%]'></div>
                  </div>
                </div>
                <div className='bg-white grow p-8 shadow-[0_0_30px_0_#0000001A] rounded-[8px]'>
                  <p className='text-[#0D6EFD] font-semibold text-xl'>Profil</p>
                  <div className='flex justify-between items-end p-4'>
                    <div className='text-[#494947]'>
                      <div>
                        <p className='nunito-font font-semibold'>Ism va sharifi:</p>
                        <p className='font-semibold text-3xl'>Kudabayeva Shiyrin</p>
                      </div>
                      <div className='flex justify-between py-4'>
                        <div>
                          <p className='nunito-font font-semibold'>Kasb:</p>
                          <p className='font-semibold text-3xl'>Oquvchi</p>
                        </div>
                        <div>
                          <p className='nunito-font font-semibold'>Jinsi:</p>
                          <p className='font-semibold text-3xl'>Ayol</p>
                        </div>
                        <div>
                          <p className='nunito-font font-semibold'>Yoshi:</p>
                          <p className='font-semibold text-3xl'>15</p>
                        </div>
                      </div>
                      <div>
                        <p className='nunito-font font-semibold'>Ta'lim joyi:</p>
                        <p className='font-semibold text-3xl'>1-QMI</p>
                      </div>
                    </div>
                    <div className='w-[200px] '>
                      <img src={profileImg} alt="Profile image" />
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default DashboardSignIn