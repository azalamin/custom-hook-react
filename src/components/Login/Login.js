import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
      <div className="form-container">
        <div className="form-main">
          <h1>Please Login</h1>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="" />
              <small style={{ textAlign: "center" }}>
                New to Our Site? <Link to="/signup">Create an account</Link>
              </small>
            </div>
            <input className="submit-btn" type="submit" value="Login" />
          </form>
          <button className="custom-btn">
            Sign In With Google
          </button>
        </div>
      </div>
    );
};

export default Login;