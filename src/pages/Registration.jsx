import { Link } from "react-router-dom"

const Registration = () => {
  return (
    <div className='grid place-content-center min-h-screen'>
        <form className='p-4 shadow-[0_0_30px_0_#0129701A] rounded-[8px] lg:min-w-[408px]'>
            <p className='text-[#012970] text-2xl text-center pb-2 pt-4 font-medium'>Akkaunt yaratish</p>
            <p className='text-center pb-4'>Akkaunt yaratish uchun shaxsiy ma'lumotlaringizni kiriting</p>
            <div className='mb-4'>
                <label htmlFor="firstName" className='block mb-2'>Ismingiz</label>
                <input type="text" id='firstName' className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 ' />
            </div>
            <div className='mb-4'>
                <label htmlFor="lastName" className='block mb-2'>Familiyangiz</label>
                <input type="text" id='lastName' className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 ' />
            </div>
            <div className='mb-4'>
                <label htmlFor="email" className='block mb-2'>E-pochta</label>
                <input type="email" id='email' className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 ' />
            </div>
            <div className='mb-4'>
                <label htmlFor="username" className='block mb-2'>Foydalanuvchi nomi</label>
                <div className='flex'>
                    <span className='inline-flex items-center px-3 text-sm bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md'>
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7578 6.29688C12.7578 6.79167 12.7005 7.27604 12.5859 7.75C12.4766 8.21875 12.3073 8.64323 12.0781 9.02344C11.849 9.39844 11.5625 9.69792 11.2188 9.92188C10.8802 10.1458 10.4792 10.2578 10.0156 10.2578C9.53125 10.2578 9.14583 10.1172 8.85938 9.83594C8.57292 9.55469 8.40104 9.22135 8.34375 8.83594H8.27344C8.07552 9.2474 7.78385 9.58854 7.39844 9.85938C7.01823 10.125 6.54948 10.2578 5.99219 10.2578C5.17969 10.2578 4.55208 9.98958 4.10938 9.45312C3.67188 8.91146 3.45312 8.19271 3.45312 7.29688C3.45312 6.59896 3.59115 5.98177 3.86719 5.44531C4.14844 4.90365 4.54167 4.47917 5.04688 4.17188C5.55729 3.85938 6.15885 3.70312 6.85156 3.70312C7.3151 3.70312 7.76562 3.74219 8.20312 3.82031C8.64062 3.89844 8.98958 3.98438 9.25 4.07812L9.09375 7.22656C9.08854 7.41927 9.08333 7.56771 9.07812 7.67188C9.07292 7.77083 9.07031 7.84896 9.07031 7.90625C9.07031 8.46875 9.16927 8.84896 9.36719 9.04688C9.57031 9.23958 9.8151 9.33594 10.1016 9.33594C10.4505 9.33594 10.7422 9.20052 10.9766 8.92969C11.2161 8.65365 11.3984 8.28646 11.5234 7.82812C11.6484 7.36458 11.7109 6.85156 11.7109 6.28906C11.7109 5.29427 11.5104 4.44531 11.1094 3.74219C10.7083 3.03906 10.1536 2.5026 9.44531 2.13281C8.74219 1.76302 7.93229 1.57812 7.01562 1.57812C6.10417 1.57812 5.29427 1.72135 4.58594 2.00781C3.88281 2.29427 3.28646 2.70052 2.79688 3.22656C2.3125 3.7474 1.94531 4.36719 1.69531 5.08594C1.44531 5.80469 1.32031 6.59896 1.32031 7.46875C1.32031 8.53125 1.50781 9.4349 1.88281 10.1797C2.26302 10.9245 2.81771 11.4922 3.54688 11.8828C4.28125 12.2682 5.17448 12.4609 6.22656 12.4609C6.86198 12.4609 7.47396 12.3906 8.0625 12.25C8.65104 12.1094 9.17708 11.9505 9.64062 11.7734V12.7891C9.18229 12.9818 8.66927 13.138 8.10156 13.2578C7.53385 13.3828 6.90885 13.4453 6.22656 13.4453C4.97135 13.4453 3.89844 13.2083 3.00781 12.7344C2.11719 12.2656 1.4349 11.5885 0.960938 10.7031C0.486979 9.81771 0.25 8.75521 0.25 7.51562C0.25 6.51042 0.403646 5.58594 0.710938 4.74219C1.02344 3.89844 1.47135 3.16667 2.05469 2.54688C2.64323 1.92708 3.35417 1.44792 4.1875 1.10938C5.02604 0.765625 5.96875 0.59375 7.01562 0.59375C8.13542 0.59375 9.125 0.825521 9.98438 1.28906C10.849 1.7474 11.526 2.40365 12.0156 3.25781C12.5104 4.10677 12.7578 5.11979 12.7578 6.29688ZM4.61719 7.32812C4.61719 8.02083 4.75521 8.52865 5.03125 8.85156C5.30729 9.17448 5.6901 9.33594 6.17969 9.33594C6.78385 9.33594 7.22656 9.10938 7.50781 8.65625C7.79427 8.20312 7.95833 7.60417 8 6.85938L8.09375 4.82031C7.94271 4.77344 7.75781 4.73438 7.53906 4.70312C7.32552 4.66667 7.10156 4.64844 6.86719 4.64844C6.33073 4.64844 5.89583 4.77604 5.5625 5.03125C5.23438 5.28646 4.99479 5.61719 4.84375 6.02344C4.69271 6.42969 4.61719 6.86458 4.61719 7.32812Z" fill="#212529"/>
                        </svg>
                    </span>
                    <input type="text" id="username" className='rounded-none rounded-e-lg bg-gray-50 border focus:ring-blue-500 focus:border-blue-500 block flex-1  min-w-0 w-full text-sm border-gray-300 p-2.5'  />
                </div>
            </div>
            <div className='mb-4'>
                <label htmlFor="password" className='block mb-2'>Parol</label>
                <input type="password" id='password' className='bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 ' />
            </div>
            <div className='flex items-center mb-4'>
                <div className='flex items-center'>
                    <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
                    <label htmlFor="remember" className='ms-2'>Men <a href="#" className='hover:underline text-blue-600'>shartlarga</a> roziman va ularni qabul qilaman.</label>
                </div>
            </div>
            <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full py-4 '>Akkaunt yaratish</button>
            <p className='mt-2'>Akkauntingiz bor mi? <Link to="/login" className='hover:underline text-blue-600'>Profilga kirish</Link></p>
        </form>
    </div>
  )
}

export default Registration