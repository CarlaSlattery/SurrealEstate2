import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineEye } from "react-icons/ai";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
setFormData((prevState) => ({...prevState, [e.target.id]: e.target.value,}))
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          ></input>

          <div className="passwordInput">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="password"
              id="password"
              value={password}
              onChange={onChange}
            />
            <AiOutlineEye
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password
          </Link>
          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <IoIosArrowForward fill="black" width="34px" height="34px" />
            </button>
          </div>
        </form>
        {/*Google OAuth */}

        <Link to="/register" className="registerLink">
          Sign Up Instead
        </Link>
      </div>
    </>
  );
}

export default SignIn;
