/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Logo from "../../assets/images/logo.webp";
import Pattern from "../../assets/images/pattern.webp";
import Google from "../../assets/images/google.png";

import { MyContext } from "../../App";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

import { Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { Link } from "react-router-dom";

const Signup = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const context = useContext(MyContext);
  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
    window.scrollTo(0, 0);
  }, []);

  const focusInput = (index) => {
    setInputIndex(index);
  };

  return (
    <>
      <img src={Pattern} className="loginPattern" />
      <section className="loginSection signupSection">
        <div className="row">
          <div className="col-md-8 d-flex align-items-center flex-column justify-content-center part1">
            <h1>
              BEST UX/UI FASHION{" "}
              <span className="text-sky">ECOMMERCE DASHBOARD</span> & ADMIN
              PANEL
            </h1>
            <p>
              Elit Iusto dolore libero recusandae dolor dolores explicabo ullam
              cum facilis aperiam alias odio quam excepturi molestiae omnis
              inventore. Repudiandae officia placeat amet consectetur dicta
              dolorem quo
            </p>

            <div className="w-100 mt-4">
              <Link to="/dashboard">
                <Button className="btn-blue btn-lg btn-big">
                  <FaHome /> &nbsp; Go To Home
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-md-4 pr-0">
            <div className="loginBox ">
              <div className="logo text-center">
                <img src={Logo} width="60px" />
                <h5 className="font-weight-bold">Register a new account</h5>
              </div>
              <div className="wrapper mt-3 card border ">
                <form>
                  <div
                    className={`form-group  position-relative ${
                      inputIndex === 0 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <FaUserCircle />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      onFocus={() => focusInput(0)}
                      onBlur={() => setInputIndex(null)}
                      autoFocus
                    />
                  </div>

                  <div
                    className={`form-group  position-relative ${
                      inputIndex === 1 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <MdEmail />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email"
                      onFocus={() => focusInput(1)}
                      onBlur={() => setInputIndex(null)}
                    />
                  </div>

                  <div
                    className={`form-group position-relative ${
                      inputIndex === 2 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <RiLockPasswordFill />
                    </span>
                    <input
                      type={isShowPassword === true ? "text" : "password"}
                      className="form-control"
                      placeholder="Enter your password"
                      onFocus={() => focusInput(2)}
                      onBlur={() => setInputIndex(null)}
                    />
                    <span
                      className="toogleShowPassword"
                      onClick={() => setIsShowPassword(!isShowPassword)}
                    >
                      {isShowPassword === true ? <IoMdEyeOff /> : <IoMdEye />}
                    </span>
                  </div>

                  <div
                    className={`form-group position-relative ${
                      inputIndex === 3 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <IoShieldCheckmarkSharp />
                    </span>
                    <input
                      type={confirmPassword === true ? "text" : "password"}
                      className="form-control"
                      placeholder="Confirm password"
                      onFocus={() => focusInput(3)}
                      onBlur={() => setInputIndex(null)}
                    />
                    <span
                      className="toogleShowPassword"
                      onClick={() => setConfirmPassword(!confirmPassword)}
                    >
                      {confirmPassword === true ? <IoMdEyeOff /> : <IoMdEye />}
                    </span>
                  </div>

                  <FormControlLabel
                    control={<Checkbox />}
                    label="I agree to the all Terms & Condiotions"
                  />

                  <div className="form-group">
                    <Button className="btn-blue btn-big w-100">Sign Up</Button>
                  </div>

                  <div className="form-group text-center mb-0">
                    <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                      <span className="line"></span>
                      <span className="txt">or</span>
                      <span className="line"></span>
                    </div>
                    <Button
                      variant="outlined"
                      className="w-100 btn-lg btn-big loginWithGoogle"
                    >
                      <img src={Google} width="25x" />
                      &nbsp; Sign In with google
                    </Button>
                  </div>
                  <span className="text-center d-block mt-3">
                    Already have an account?{" "}
                    <Link to="/login" className="link color ml-2">
                      Login
                    </Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
