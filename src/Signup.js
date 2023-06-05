import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signuppage.css'
import Design from './Design'
import Signuplogo from "./Signuplogo";

const Signup = ({ signpagestatus }) => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [isinside,setisinside]=useState('');
  const navigate=useNavigate();
  const changestatus = (status) => {
    signpagestatus(status);
  }
  const adduser = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    }
    console.log(data);
    var present = 0;
    let s = "https://metamask-backend.onrender.com/read/" + email;
    fetch(s)
      .then((response) => {

        if (response.ok) {
          response.json()
            .then((res) => {
              console.log(res.status);
              if (res.status != "present") {
                present = 1;
                fetch('https://metamask-backend.onrender.com/create', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
                })
                  .then((response) => {
                    if (response.ok) {
                      alert("Signed up successfully");
                      changestatus("metamask");
    
                      navigate('/metamask');
                    } else {
                      alert("Error Sending Data");
                    }
                  })
                  .catch((error) => {
                    console.log('Error making API request', error);
                  });
              }
              else {
                alert("Already present");
                navigate('/login')
                
              }
            })
        }
      })


  }
  return (
    <div className="signup-page-container">
      <Design/>
      <Signuplogo/>
      <div className="signup-box">
        <h2 className="signup-heading">Signup</h2>
        <form onSubmit={adduser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setemail(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setpassword(e.target.value)} />
          </div>
          <button type="submit" className="signup-button">Submit</button>
        </form>
        <div className="button-group">
          <button className="secondary-button" onClick={() => navigate('/login')}>Login Page</button>
          <button className="secondary-button" onClick={() => navigate('/home')}>Home</button>
        </div>
      </div>
    </div>
  )
}

export default Signup;