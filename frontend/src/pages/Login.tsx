import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userInterface } from "./Register";
import toast from "react-hot-toast";
import { userUrl } from "../config/ApiUrl";

function Login() {
  const [hidden, setHidden] = useState("password");
  const [input, setInput] = useState<Omit<userInterface, 'username'>>({
    email: "",
    password: ""
  });

  const navigate = useNavigate()

  const HandleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();


    //make axios request
    axios.defaults.withCredentials = true
    axios.post(`${userUrl.baseUrl}`, {
      email: input.email,
      password: input.password
    })
      .then((response) => {
        if (response.data.user.id) {
          toast.success(response.data.message)
          navigate('/')
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message)
      });
  };

  return (
    <>
      <form
        onSubmit={(e) => HandleSubmit(e)}
        className="text-white border-t-4 md:w-96 h-[400px] rounded-md border-t-orange-500 mx-auto"
      >
        <h1 className="text-center mt-4">Login</h1>
        <div className="flex gap-4 flex-col justify-center items-center mt-10">
          <input
            className="border-2 w-full h-12 pl-8 rounded-md outline-orange-500"
            type="text"
            name="email"
            placeholder=" Email"
            onChange={(e) => HandleInput(e)}
          />

          <div className="relative flex items-center w-full">
            <input
              className="border-2 w-full h-12 pl-8 rounded-md outline-orange-500"
              type={hidden}
              name="password"
              placeholder="password"
              onChange={(e) => HandleInput(e)}
            />

            {hidden == "password" ? (
              <span
                className="absolute right-5 cursor-pointer"
                onClick={() => setHidden("text")}
              >
                <VisibilityOffIcon />
              </span>
            ) : (
              <span
                className="absolute right-5 cursor-pointer"
                onClick={() => setHidden("password")}
              >
                <RemoveRedEyeIcon />
              </span>
            )}
          </div>

          <button className="h-10 bg-white text-black rounded-xl w-full cursor-pointer hover:bg-orange-500 hover:text-white transition-all duration-500 ">
            Login
          </button>
          <p>
            {" "}
            New User?{" "}
            <Link className="underline text-orange-500" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
