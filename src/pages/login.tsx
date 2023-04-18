/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
/* eslint-disable @next/next/no-img-element */
export default function Login() {
  const date = new Date().getFullYear();
  const [showPassword, setShowPassword] = useState(false);
  const [borderLine, setBorderLine] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Head>
        <title>Authentication Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="authentication">
        <Link href="/" className="auth-logo">
          <img src="/images/benaya-banner-2.png" alt="" />
        </Link>
        <div className="login-form">
          <h1>Sign In</h1>
          <div className="options">
            <div className="signup-option">
              <img src="/icons/facebook.png" className="option-icon" />
              Facebook
            </div>
            <div className="signup-option">
              <img src="/icons/google.png" className="option-icon" />
              Google
            </div>
          </div>
          <div className="or">
            <div>or</div>
          </div>
          <form action="">
            <div className="email-input">
              <input
                type="email"
                placeholder="Enter email address"
                onClick={() => setBorderLine(false)}
              />
            </div>
            <div className="password-container">
              <div
                className={
                  borderLine ? "password-input active" : "password-input"
                }
                onClick={() => setBorderLine(true)}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                />
                {showPassword ? (
                  <BsEye
                    className="password-icon"
                    onClick={handleClickShowPassword}
                  />
                ) : (
                  <BsEyeSlash
                    className="password-icon"
                    onClick={handleClickShowPassword}
                  />
                )}
              </div>
              <a href="">Forgot Password</a>
            </div>

            <div
              className="checkbox-input"
              onClick={() => setBorderLine(false)}
            >
              <input type="checkbox" />
              <span>Yes, I agree to the Terms and Conditions</span>
            </div>
            <button>Create Account</button>
          </form>
          <div className="login-portal">
            Don&apos;t have an account?{" "}
            <Link href="/authentication">Register</Link>
          </div>
        </div>
        <div className="login-image">
          <img src="/images/signin-image.jpg" alt="" className="image-up" />
          <img src="/images/signin-image-2.jpg" alt="" className="image-down" />
        </div>
      </div>
      <div className="footer-copyright authentication-footer">
        Copyright ©{date}{" "}
        <a
          href="https://github.com/invisiblemask"
          target="_blank"
          rel="noreferrer"
        >
          invisiblemask.
        </a>{" "}
        All Rights Reserved
      </div>
    </>
  );
}
