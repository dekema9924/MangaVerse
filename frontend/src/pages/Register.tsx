import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

function Register() {
  const [hidden, setHidden] = useState("password");

  const [input, setInput] = useState({});

  const HandleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <>
      <form
        onSubmit={(e) => HandleSubmit(e)}
        className="text-white  border-t-4 md:w-96 h-[400px] rounded-md border-t-orange-500 mx-auto"
      >
        <h1 className="text-center mt-4">Register</h1>
        <div className="flex gap-4 flex-col justify-center items-center mt-10">
          <input
            className="border-2 w-full h-12 pl-8 rounded-md outline-orange-500"
            type="text"
            name="username"
            placeholder="username"
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

          <input
            className="border-2 w-full  h-12 pl-8 rounded-md outline-orange-500"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => HandleInput(e)}
          />
          <button className="h-10 bg-white text-black rounded-xl w-full cursor-pointer hover:bg-orange-500 hover:text-white transition-all duration-500 ">
            Register
          </button>
          <p>
            {" "}
            Have an account?{" "}
            <Link className="underline text-orange-500" to={"/login"}>
              Login{" "}
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default Register;
