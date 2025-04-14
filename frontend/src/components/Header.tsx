import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from '@mui/icons-material/Logout';
// import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useMenu } from "../context/MenuContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/Store";
import cookies from 'js-cookie'
import useGetUser from "../hooks/useGetUser";
import { logout } from "../features/UserSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';


const Header = () => {
  const { MenuClicked, setMenuClicked } = useMenu();
  const location = useLocation()
  const user = useSelector((state: RootState) => state.user.value)
  const userToken = cookies.get('token')
  const dispatch = useDispatch()
  const navigate = useNavigate()



  //set user in redux
  useGetUser()

  //logout function
  const Logout = () => {
    dispatch(logout())
    toast.success('logging out...')
    cookies.remove('token')
    navigate('/')
  }


  //handle hamburger menu
  useEffect(() => {
    if (MenuClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [MenuClicked, userToken]);



  return (
    <>
      <header className="flex  h-14 items-center justify-between relative border-b-[1px]    ">
        <div className="flex md:ml-10 ml-2 md:gap-4 gap-2 items-center">
          <div onClick={() => setMenuClicked(true)}>
            <MenuIcon className="cursor-pointer" style={{ fontSize: "30px" }} />
          </div>
          <Link to={"/"}>
            <h1 className="md:text-[1.4em]">
              Manga<span className="font-bold text-orange-500">Verse</span>
            </h1>
          </Link>
        </div>

        {/* //login btn */}
        <div className="flex gap-4 items-center mr-4">
          {
            user.username.length > 0 ? (
              <div className="flex gap-4 items-center">
                <p className="uppercase font-bold w-8 h-8 rounded-full bg-orange-500 flex justify-center items-center">{user.username.slice(0, 2)}</p>
                <p onClick={() => Logout()}><LogoutIcon className="text-red-500 cursor-pointer" /></p>

              </div>
            ) : location.pathname === '/login' ? (
              <Link to="/register" className="underline">Register</Link>
            ) :

              (
                <>
                  <Link to="/login" className="underline mr-4">Login</Link>
                  <Link to="/register" className="underline">Register</Link>
                </>
              )
          }

          <p className="md:mr-10 mr-2 p-1 bg-orange-500 text-white rounded-md w-34 text-center font-bold md:block hidden">
            MangaDexAPI
          </p>
        </div>
      </header>

      {/* //sideBar */}
      <aside
        className={` w-55 h-[100vh] pl-2 border-r-[1px] absolute -left-100 transition-all duration-500 top-0 z-50 bg-black  ${MenuClicked ? "left-0" : "-left-100"
          } `}
      >
        <div className="flex items-center justify-between p-2">
          <h1>Menu</h1>
          <div className="cursor-pointer" onClick={() => setMenuClicked(false)}>
            <CloseIcon />
          </div>
        </div>
        <hr />

        {/* account */}
        <div className="flex w-11/12 bg-gray-700 items-center p-2 mt-4 gap-2">
          <AccountCircleIcon />
          <p>Account</p>
        </div>
        <Link
          to={"/"}
          className="flex items-center w-11/12 my-1  bg-gray-700 gap-2"
        >
          <div className="bg-orange-500 rounded-md w-8 h-8 text-center">
            <HomeFilledIcon className=" text-white " />
          </div>
          <p>Home</p>
        </Link>

        {/* //general */}

        <p className="text-gray-400 mt-4">General</p>
        {
          user.id.length > 0 ?
            <>
              <div className="flex items-center w-11/12 my-1  bg-gray-700 gap-2">
                <div className="bg-orange-500 rounded-md w-8 h-8 text-center">
                  <SettingsIcon className=" text-white " />
                </div>
                <Link to={'/settings'}>Settings</Link>
              </div>
              <div className="flex items-center w-11/12  bg-gray-700 gap-2">
                <div className="bg-orange-500 rounded-md w-8 h-8 text-center">
                  <BookmarkAddedIcon className=" text-white " />
                </div>
                <Link to={'/bookmarks'}>Bookmarks</Link>
              </div>
            </>
            :
            <>
              <div className="flex items-center w-11/12  bg-gray-700 gap-2 cursor-pointer">
                <div className="bg-orange-500 rounded-md w-8 h-8 text-center">
                  <LoginIcon className=" text-white " />
                </div>
                <Link to="/login" >Login</Link>
              </div>
            </>

        }

        {/* //dev options */}
        {/* <p className="text-gray-400 mt-4">Dev Options</p>
        <div className="bg-gray-700 mt-1 p-2 w-11/12">
          <p className="border-b-[1px] border-gray-500 my-1">Module Logs</p>
          <p className="border-b-[1px] border-gray-500 my-1">Module Creator</p>
          <p className="my-1">Documentation</p>
        </div> */}

        {/* website */}
        {/* <p className="text-gray-400 mt-4">Website</p>
        <div className="flex items-center w-11/12 my-1  bg-gray-700 gap-2">
          <div className="bg-orange-500 rounded-md w-8 h-8 text-center">
            <LanguageIcon className=" text-white " />
          </div>
          <p>Website</p>
        </div> */}

        <Footer />
      </aside>
    </>
  );
};

export default Header;
