import React, { useState } from 'react';
import { Router, useNavigate,Routes,Route } from 'react-router';
import Metamask from './Metamask';
import Design from './Design';
import './Loginpage.css'
import LoginPagelogo from './LoginPagelogo';

const Login = ({ loginpagestatus }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');
  const [loginstatus,setloginstatus]=useState(false);
  const navigate=useNavigate();
  
  const changestatus = (status) => {
    loginpagestatus(status);
  }
  const handleLogin = (e) => {
    e.preventDefault();
    let s = "https://panicky-fish-hoodie.cyclic.app/check/" + email + "/" + password;
    fetch(s)
      .then((resp) => {
        resp.json()
          .then((response) => {
            console.log(response);
            if (response.presence == true && response.validate == true) {
              setloginstatus(true);
              changestatus("metamask")
              navigate('/metamask')
            }
            else if (response.presence == true && response.validate == false) {
              alert("Please Enter Correct Password!!!!!!")
            }
            else {
              alert("Please Signup first , you are not registered")
              navigate('/signup')
            }
          });

      })


  };

  return (
    <div className="login-page-container">
      <Design/>
      <LoginPagelogo/>
    <div className="login-box">
      <h2 className="login-heading">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setemail(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setpassword(e.target.value)} />
        </div>
        <button type="submit" className="login-button">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <div className="button-group">
        <button className="secondary-button" onClick={() => navigate('/signup')}>Sign up</button>
        <button className="secondary-button" onClick={() => navigate('/home')}>Home</button>
      </div>
    </div>
  </div>
  );
};

export default Login;

