import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const [customError, setCustomError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.ConfirmPassword.value;

    if (password !== confirmPassword) {
      setCustomError("Confirm password not matched");
      return;
    }
    createUserWithEmailAndPassword(email, password);

    if (user) {
      console.log(user);
    }
  };

  console.log(googleUser)

  return (
    <div className="form-container">
      <div className="form-main">
        <h1>Please Sing up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <input
              type="password"
              name="ConfirmPassword"
              id="confirmPassword"
              required
            />
            <p>
              <small style={{ color: "red" }}>{customError}</small>
            </p>
          </div>
          <input className="submit-btn" type="submit" value="Sign up" />
          <small style={{ textAlign: "center" }}>
            Already have an account? <Link to="/login">Sign up</Link>
          </small>
        </form>
        <button onClick={() => signInWithGoogle()} className="custom-btn">
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
