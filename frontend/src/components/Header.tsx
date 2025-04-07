import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useMenu } from '../context/MenuContext';
import { useEffect } from 'react';

const Header = () => {

    const {MenuClicked, setMenuClicked} = useMenu()

    useEffect(() => {
        if (MenuClicked) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      
        return () => {
          document.body.style.overflow = '';
        };
      }, [MenuClicked]);
    

    return (
        <>
            <header className='flex  h-14 items-center justify-between relative border-b-[1px]    '>
                <div className='flex md:ml-10 ml-2 md:gap-4 gap-2 items-center'>
                    <div onClick={() => setMenuClicked(true)}>
                        <MenuIcon className='cursor-pointer' style={{ fontSize: '30px' }} />
                    </div>
                  <Link to={'/'}><h1 className='text-[1.4em]'>Manga<span className='font-bold text-orange-500'>Verse</span></h1></Link>
                </div>
                <p className='md:mr-10 mr-2 p-1 bg-orange-500 text-white rounded-md w-34 text-center font-bold'>MangaDexAPI</p>
            </header>

            {/* //sideBar */}
            <aside className={` w-55 h-[100vh] pl-2 border-r-[1px] absolute -left-100 transition-all duration-500 top-0 z-50 bg-black ${MenuClicked ? "left-0" : "-left-100"} `}>
                <div className='flex items-center justify-between p-2'>
                    <h1>Menu</h1>
                    <div className='cursor-pointer' onClick={()=>setMenuClicked(false)}>
                        <CloseIcon />
                    </div>
                    
                </div>
                <hr />

                {/* account */}
                <div className='flex w-11/12 bg-gray-700 items-center p-2 mt-4 gap-2'>
                    <AccountCircleIcon/>
                    <p>Account</p>
                </div>
                <Link to={'/'} className='flex items-center w-11/12 my-1  bg-gray-700 gap-2'>
                    <div className='bg-orange-500 rounded-md w-8 h-8 text-center'>
                        <HomeFilledIcon className=' text-white ' />
                    </div>
                    <p>Home</p>
                </Link>

                {/* //general */}

                <p className='text-gray-400 mt-4'>General</p>
                <div className='flex items-center w-11/12 my-1  bg-gray-700 gap-2'>
                    <div className='bg-orange-500 rounded-md w-8 h-8 text-center'>
                        <SettingsIcon className=' text-white ' />
                    </div>
                    <p>Settings</p>
                </div>
                <div className='flex items-center w-11/12  bg-gray-700 gap-2'>
                    <div className='bg-orange-500 rounded-md w-8 h-8 text-center'>
                        <NotificationsIcon className=' text-white ' />
                    </div>
                    <p>Notification</p>
                </div>

                {/* //dev options */}
                <p className='text-gray-400 mt-4'>Dev Options</p>
                <div className='bg-gray-700 mt-1 p-2 w-11/12'>
                    <p  className='border-b-[1px] border-gray-500 my-1'>Module Logs</p>
                    <p className='border-b-[1px] border-gray-500 my-1'>Module Creator</p>
                    <p className='my-1'>Documentation</p>
                </div>

                {/* website */}
                <p className='text-gray-400 mt-4'>Website</p>
                <div className='flex items-center w-11/12 my-1  bg-gray-700 gap-2'>
                    <div className='bg-orange-500 rounded-md w-8 h-8 text-center'>
                        <LanguageIcon className=' text-white ' />
                    </div>
                    <p>Website</p>
                </div>

                <Footer/>
            </aside>
        </>
    )
}

export default Header

