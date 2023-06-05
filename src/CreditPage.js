import React from 'react';
import { Link } from 'react-router-dom';
import './CreditPage.css'; // Import CSS file
import Design from './Design';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const CreditPage = () => {
    const navigate=useNavigate();
  return (
    <div className="credit-container">
        <Design/>
      <h1 className="credit-heading">Credit Page</h1>
      <div className="credit-section">
        <h2 className="credit-subheading">Frontend</h2>
        <p className="credit-details">React.js</p>
        <p className="credit-developers">Developed by: Kartik Yadav and Mohit Chaudhary</p>
      </div>
      <div className="credit-section">
        <h2 className="credit-subheading">Backend</h2>
        <p className="credit-details">Node.js</p>
        <p className="credit-developers">Developed by: Kartik Yadav</p>
      </div>
      <div className="credit-section">
        <h2 className="credit-subheading">Dynamic Designs</h2>
        <p className="credit-details">Developed by: Mohit Chaudhary</p>
      </div>
      <div className="credit-section">
        <h2 className="credit-subheading">Website Content</h2>
        <p className="credit-details">Developed by: Mohit Chaudhary and Kartik Yadav</p>
      </div>
      <div className="home-button-container">
        <Button className='home-button' onClick={()=>navigate('/home')} >Home</Button>
      </div>
    </div>
  );
};

export default CreditPage;
