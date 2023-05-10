import { useState } from "react";
import {toast} from "react-toastify"
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

const onSubmit = async (e) => {
  e.preventDefault()
try {
  const auth = getAuth();

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  if (userCredential) {
    navigate("/profile");
  }
} catch (error) {
  toast.error("Invalid user credentials")
}
  
}

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Please sign in</p>
        </header>

        <form onSubmit={onSubmit}>
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
              autoComplete="off"
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
