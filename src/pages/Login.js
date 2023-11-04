import React, { useState } from "react";
import "../assets/css/styles.css";
import SignInForm from "../components/SignIn";
import SignUpForm from "../components/SignUp";
import male from '../assets/images/male.png';
import female from '../assets/images/tourist.png';
import passport from '../assets/images/passport.png';
import vacation from '../assets/images/vacation.png';

export default function Login() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App">
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
            <div className="row">
              <img src={passport} alt="" style={{width:"150px",height:"150px"}}/>
              <img src={vacation} alt="" style={{width:"150px",height:"150px"}}/>
              </div>
              <h1>Travel The World With Us!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <div className="row">
              <img src={male} alt="" style={{width:"150px",height:"150px"}}/>
              <img src={female} alt="" style={{width:"150px",height:"150px"}}/>
              </div>
              <h1>Hello, Traveller!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
