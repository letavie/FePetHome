import PetDog from "../../../assets/images/PetDog.png";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyAxios from "../../../setup/configAxios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initFormValue = {
  email: "",
  password: "",
};

// Check empty
const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};

// Check email
const isEmailValid = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const LoginForm = () => {
  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const [loginFail, setLoginFail] = useState(false);

  // Xử lý remember me
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedRememberMe = localStorage.getItem("rememberMe");

    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setFormValue({
          email: user.email,
          password: "",
        });

        if (savedRememberMe === "true") {
          setRememberMe(true);
        } else {
          setRememberMe(false);
        }
      } catch (error) {
        console.error(error);
        localStorage.removeItem("user");
        localStorage.removeItem("rememberMe");
      }
    }
  }, []);

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  // Lấy trạng thái checked or unchecked
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  // Post API
  const loginUser = async (email, password) => {
    try {
      const response = await MyAxios.post("http://localhost:5000/api/v1/auth/login", {
        email,
        password,
      });
      const { access_token, refresh_token } = response.data;

      if (response.status === "success") {
        if (rememberMe) {
          saveLoginInfo(access_token, refresh_token);
        }
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
        localStorage.setItem("userId", response.data.id);
        localStorage.setItem("userRole", response.data.role);

        const userRole = localStorage.getItem("userRole");
        if (userRole === "STAFF") {
          window.location.href = "/staff";
        } else if (userRole === "ADMIN") {
          window.location.href = "/admin";
        }
        else if (userRole === "CUSTOMER") {
          window.location.href = "/";
        } else {
          // Handle other roles or unexpected cases
          console.log("Unknown user role:", userRole);
        }
      } else {
        setLoginFail(true);
        toast.error(`Đăng nhập thất bại: ${response.message || "Unknown error"}`);
      }
    } catch (error) {
      setLoginFail(true); // Cập nhật trạng thái đăng nhập thất bại
    }
  };

  // Xử lý validate
  const validateForm = () => {
    const errors = {};
    if (isEmptyValue(formValue.email)) {
      errors.email = "Email is required";
    } else if (!isEmailValid(formValue.email)) {
      errors.email = "Email is invalid";
    }
    if (isEmptyValue(formValue.password)) {
      errors.password = "Password is required";
    }
    setFormError(errors);
    return Object.keys(errors).length === 0;
  };

  const saveLoginInfo = (user, access_token, refresh_token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    localStorage.setItem("rememberMe", rememberMe);
  };

  // Xử lý đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      loginUser(formValue.email, formValue.password);
    } else {
      console.log("Form invalid");
    }
  };

  return (
    <>
      <div className="w-full h-screen flex items-start">
        <div className="relative w-1/2 h-full flex flex-col">
          <img src={PetDog} className="w-full h-full" alt="Pet Dog" />
        </div>
        <div className="w-1/2 h-full bg-[#fff] flex flex-col p-20 justify-between items-center">
          <h1 className="w-full max-w-[550px] mx-auto text-xl text-[#060606] font-semibold mr-auto">
            Pet Home dịch vụ tốt nhất cho thú cưng
          </h1>
          <div className="w-full flex flex-col max-w-[550px]">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-4xl font-semibold mb-2">Login</h3>
              <p className="text-base mb-2">Welcome Back! Please fill your details.</p>
            </div>
            <form className="w-full flex flex-col" onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                required
                autoComplete="email"
              />
              {formError.email && <div className="text-red-500 text-sm">{formError.email}</div>}
              <input
                type="password"
                name="password"
                value={formValue.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                required
                autoComplete="current-password"
              />
              {formError.password && <div className="text-red-500 text-sm">{formError.password}</div>}
              <div className="w-full flex items-center justify-between">
                <div className="w-full flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                    className="w-4 h-4 mr-2"
                  />
                  <p className="text-sm">Remember me</p>
                </div>
                <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                  Forgot Password?
                </p>
              </div>
              <div className="w-full flex flex-col my-4">
                <button
                  type="submit"
                  className="w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
                >
                  Log in
                </button>
                <Link to="/register">
                  <button className="w-full text-[#060606] my-2 bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                    Register
                  </button>
                </Link>
              </div>
            </form>
            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-lg absolute text-black/80 bg-[#f5f5f5] px-2">or</p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal text-black">
              Don't have a account ?{" "}
              <Link to="/register">
                <span className="font-semibold underline underline-offset-2 cursor-pointer">Sign up for free ?</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
