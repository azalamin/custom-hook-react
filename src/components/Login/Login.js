import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  
  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    console.log(user);
    navigate('/')
  }

  return (
    <div className="form-container">
      <div className="form-main">
        <h1>Please Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              ref={passwordRef}
              type="password"
              name="password"
              id="password"
            />
            <p style={{color: 'red'}}>{error?.message.includes('wrong') &&'Wrong password'}</p>
          </div>
          <input className="submit-btn" type="submit" value="Login" />
          <small style={{ textAlign: "center" }}>
            New to Our Site? <Link to="/signup">Create an account</Link>
          </small>
        </form>
        <button className="custom-btn">Sign In With Google</button>
      </div>
    </div>
  );
};

export default Login;
