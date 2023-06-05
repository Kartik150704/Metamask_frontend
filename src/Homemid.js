import React from "react";
import Design from "./Design";
import './Homemid.css'
import { useNavigate } from "react-router";
const Homemid=({homepagestatus})=>
{
  const navigate=useNavigate();
    const pagestatus=(status)=>
    {
        homepagestatus(status);
    }
    return(
      <div className="home-page-container">
        <Design/>
      <h1 className="midpageheading">Welcome to Our MetaMask Website</h1>
      <p className="description">
        With our MetaMask-powered platform, you can securely and easily transfer ethers (test) using the power of blockchain technology. Enjoy fast and reliable transactions with the convenience of MetaMask.
      </p>
      <p className="features">
        Key Features:
      </p>
      <ul className="feature-list">
        <li>Securely send and receive ethers (test) using MetaMask</li>
        <li>Fast and efficient transactions powered by blockchain</li>
        <li>Intuitive and user-friendly interface for seamless interaction</li>
        <li>Transparent and decentralized ecosystem for enhanced trust</li>
      </ul>
      <p className="cta">
        Get started now and experience the future of digital transactions!
      </p>
      <button className="get-started-button" onClick={()=>navigate('/signup')}>Get Started</button>
      <button className="get-started-button" onClick={()=>navigate('/credit')}>Credits</button>
    </div>
    )
}

export default Homemid;