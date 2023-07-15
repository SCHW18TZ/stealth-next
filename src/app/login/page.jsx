"use client"
import React, { useState } from 'react'
import GoogleButton from 'react-google-button'
import { useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from 'firebase/auth'

const index = () => {

  const SignUserIn = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const [showpassword, setshowpassword] = useState(true);

  const toggleshowpassword = () => {
    {
      showpassword ? setshowpassword(false) : setshowpassword(true);
    }
  };



  return (
    <>
    <div className="login-page-container">
      <form className="login-card" onSubmit={SignUserIn}>
        <h1 className="login-heading">Welcome Back!</h1>
        <div className="login-input">
          <input type="email" placeholder="Enter your email..." />
          <div className="underline" />
        </div>
        <div className="login-input">
          <input placeholder="Enter your Password..." type="password" />
          <div className="underline" />
        </div>
        <div className="login-button-container">
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
      </form>
      <div className="GoogleLogin">
        <p>Or you can login using Google</p>
        {/* <GoogleLogin /> */}
      </div>
    </div>
  </>
  )
}

export default index