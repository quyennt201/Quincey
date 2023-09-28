import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import userService from "../../services/UserService";
import { useSetRecoilState, useRecoilState } from "recoil";
import { toastState, toastTxt, toastType } from "../../recoil/ToastMessState";
import { userState } from "../../recoil/UserState";
import { loadingState } from "../../recoil/LoadingState";
import { validateRegister, validateLogin } from "../../utils/validateForm";

function LoginPage(props) {
  const [isLogin, setIsLogin] = useState(props.isLogin);
  const setUserLogin = useSetRecoilState(userState);
  const [user, setUser] = useState({});
  const setType = useSetRecoilState(toastType);
  const setTxt = useSetRecoilState(toastTxt);
  const setState = useSetRecoilState(toastState);
  const setLoading = useSetRecoilState(loadingState);

  const naviagte = useNavigate();

  const settingToastMess = (type, txt) => {
    setState(true);
    setTxt(txt);
    setType(type);
  };

  const handleChange = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const error = validateRegister(user);
    if (error) {
      settingToastMess("warning", error);
    } else {
      setLoading(true);
      // console.log(user);
      const res = await userService.register(user);
      console.log(res);
      if (res?.message) {
        settingToastMess("success", res?.message);
        setIsLogin(true);
        naviagte("/login");
        setUser({});
        setLoading(false);
      } else {
        settingToastMess("error", res?.data?.error);
        setLoading(false);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const error = validateLogin(user);
    if (error) {
      settingToastMess("warning", error);
    } else {
      setLoading(true);
      const res = await userService.login(user);
      if (res?.message) {
        settingToastMess("success", res?.message);
        setUserLogin(res?.data);
        setUser({});
        // console.log(res?.data)
        localStorage.setItem("user", JSON.stringify(res?.data))
        if(res?.data?.admin) {
          naviagte("/product")
        }
        else {
          naviagte("/");
        }
        setLoading(false);
      } else {
        settingToastMess("error", res?.data?.error);
        setLoading(false);
      }
    }
  };

  return (
    <div className="login">
      <p className="login-qu">
        {isLogin
          ? "Do not have an account? "
          : "Do you already have an account? "}
        {isLogin ? (
          <Link
            onClick={() => {
              setIsLogin(!isLogin);
              setUser({});
            }}
            style={{ color: "#4F709C" }}
            to="/sign-up"
          >
            Sign up
          </Link>
        ) : (
          <Link
            onClick={() => {
              setIsLogin(!isLogin);
              setUser({});
            }}
            style={{ color: "#4F709C" }}
            to="/login"
          >
            Login
          </Link>
        )}
      </p>
      {isLogin ? (
        <div className="login-form">
          <Input
            type="text"
            require={true}
            label="Email"
            value={user?.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <Input
            type="password"
            require={true}
            label="Password"
            value={user?.password || ""}
            onChange={(e) => handleChange("password", e.target.value)}
          />
          <div className="login-forgot">
            <Link to="" style={{ color: "#4F709C" }}>
              Forgot password?
            </Link>
          </div>
          <Button name="Login" onClick={(e) => handleLogin(e)} />
        </div>
      ) : (
        <div className="login-form">
          <Input
            type="text"
            require={true}
            label="Email"
            value={user?.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <Input
            type="password"
            require={true}
            label="Password"
            value={user?.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
          <Input
            type="text"
            require={true}
            label="Fullname"
            value={user?.fullname}
            onChange={(e) => handleChange("fullname", e.target.value)}
          />
          <Input
            type="text"
            require={true}
            label="PhoneNumber"
            value={user?.phonenumber}
            onChange={(e) => handleChange("phonenumber", e.target.value)}
          />
          <Button name="Sign Up" onClick={(e) => handleRegister(e)} />
        </div>
      )}
    </div>
  );
}

export default LoginPage;
