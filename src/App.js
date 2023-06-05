import React, { useState } from 'react';
import { BrowserRouter as Router, Switch,Routes ,Route} from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';
import Metamask from './Metamask';  // Add this line
import './App.css'
import Home from './Homeup';
import Design from './Design';
import Homeup from './Homeup';
import Homemid from './Homemid';
import Homebottom from './Homebottom';

import './Design.css'
import CreditPage from './CreditPage';

const App = () => {
  
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [pagestatus, setpagestatus]=useState("home");
    const [registered,setregistered]=useState(false);
    const handleLoginStatus = (status) => {
      setIsLoggedIn(status);
    };


  
  
  return (
    <div>
    {/* <Signup signedupstatus={hadlesignupstatus}/>
    {issignedup==1?<Metamask/>:<p>Error</p>} */}
    {/* <Signup/> */}
    {/* {pagestatus=="home" && <Homeup homepagestatus={setpagestatus}/>}
    {pagestatus=="login" && < Login loginpagestatus={setpagestatus}/>}
    {pagestatus=="signup" && <Signup signpagestatus={setpagestatus}/>}
    {pagestatus=="metamask" && <Metamask metamaskpagestatus={setpagestatus}/>} */}
    
    <Router>
      <Routes>
      <Route exact path="/home" element={
        <div>
          <Homeup/>
          <Homemid/>
          <Homebottom/>
        </div>
      } />
      <Route exact path="" element={
        <div>
          <Homeup/>
          <Homemid/>
          <Homebottom/>
        </div>
      } />
      <Route exact path="/signup" element={<Signup signpagestatus={setpagestatus}/>} />
      <Route exact path="/login" element={<Login loginpagestatus={setpagestatus}/>} />
      <Route exact path="/credit" element={<CreditPage/>} /> 
      <Route exact path="/metamask" Component={Metamask}/>
      

      </Routes>
    </Router>
     
      
    
    
    

    

  </div>

  );
};

export default App;
