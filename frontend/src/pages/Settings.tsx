

import { useSelector } from 'react-redux'
import { RootState } from '../store/Store'

function Settings() {
    const user = useSelector((state: RootState) => state.user.value)
    return (
        <>
            <div className='flex flex-col gap-4  md:w-96'>
                <h1>Settings</h1>
                <p className='text-gray-400 text-sm'>Manage your account</p>
                <hr className='w-1/2' />
                <div className=''>
                    <h3>Profile</h3>
                    <div className='flex w-66 gap-2 mt-4'>
                        <img className='w-22 h-22 rounded-full  object-cover' src="https://placehold.co/600x400" alt="userProfileImage" />
                        <p className='text-gray-500 w-22'>This is how others see you</p>
                    </div>
                    <form className='h-96 mt-6 flex flex-col gap-4  ' action="">
                        {/* //username */}
                        <div className=' mt-4 h-14 flex flex-col'>
                            <label htmlFor="username">Username</label>
                            <input className='border-2 border-gray-500 outline-orange-500 w-11/12 pl-4 text-white rounded-md my-2' type="text" name="username" placeholder={user.username} />
                        </div>

                        {/* //email */}
                        <div className=' mt-4 h-14 flex flex-col'>
                            <label htmlFor="username">Email</label>
                            <input className='border-2 border-gray-500 outline-orange-500 w-11/12 pl-4 text-white rounded-md my-2' type="text" name="username" value={user.email} />
                            <p className='text-sm text-gray-400'>This is your email and it caannot be changed</p>
                        </div>

                        {/* //password */}
                        <div className=' mt-4 h-14 flex flex-col'>
                            <label htmlFor="password">Password</label>
                            <input className='border-2 border-gray-500 outline-orange-500 w-11/12 pl-4 text-white rounded-md my-2' type="text" name="password" />
                        </div>

                        <button className=' w-11/12 h-10 rounded-lg cursor-pointer bg-white text-black '>Update Profile</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Settings