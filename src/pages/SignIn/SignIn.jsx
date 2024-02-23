/*global google*/
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SignIn.css";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/actions";

function SignIn() {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const dispatch = useDispatch();

  function handleCallbackResponse(response) {
    console.log("encoded jwt", response.credential);
    var userObject = jwtDecode(response.credential);
    console.log("decode jwt", userObject);
    const uservalue = {
      name: userObject.name,
      image: userObject.picture,
    };
    dispatch(signIn(uservalue));
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "529555787512-7qjj885khmf24kem6t00m4nin7lfanof.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("g-sign"), {
      theme: "filled_blue",
      size: "large",
      width: "260px",
    });
  }, []);

  return (
    <div className="signin-box">
      <label className="block head-label">Sign In</label>

      <div className="signin-img">
        <img src="/signup-logo.svg" alt="Sign up Logo" />
      </div>
      <div className="signin-input">
        <div className="email-div margin">
          <label className="block input-label">Email address</label>
          <input
            onChange={(e) => setEmailLogin(e.target.value)}
            className="input-type"
            placeholder="Enter Email"
          />
        </div>
        <div className="password-div margin">
          <label className="block input-label">Password</label>
          <input
            onChange={(e) => {
              setPasswordLogin(e.target.value);
            }}
            className="input-type"
            placeholder="Enter Password"
          />
        </div>
        <div className="signIn-div">
          <input type="submit" value="Sign In" />
        </div>
        <div className="create-forgot-div">
          <Link className="text-decor" to="/Signup">
            Create Account&nbsp;
          </Link>
          |<Link className="text-decor">&nbsp;Forgot Password?</Link>
        </div>
        <div className="g-sign mt-3" id="g-sign"></div>
      </div>
    </div>
  );
}

export default SignIn;
