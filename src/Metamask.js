import './Metamask.css'
import { useNavigate } from 'react-router';
import React from 'react';
import Design from './Design';
import { ethers } from 'ethers';
import { useState } from 'react';
import Dropdown from './Dropdown';


const Metamask = ({metamaskpagestatus}) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [selectedOption, setSelectedOption] = useState("slow");

    const changestatus=(status)=>
    {
        metamaskpagestatus(status);
    }


    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    accountChanged([result[0]])

                })
        }
        else {
            setErrorMessage("Install Metamask please")
        }
    }

    const accountChanged = (accountName) => {
        setDefaultAccount(accountName);
        getUserBalance(accountName);
    }

    const getUserBalance = (accountAddress) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [String(accountAddress), "latest"] })
            .then(balance => {
                setUserBalance(ethers.formatEther(balance));
            })
    }
    async function sendTransaction(e) {
        let speed;
        if (selectedOption === "slow") {
            speed = 2500000;
        }
        else if (selectedOption === "medium") {
            speed = 25000000;
        }
        else {
            speed = 95000000000;
        }
        let amount = e.target.amount.value;
        let send_amount = ethers.parseEther(amount.toString());
        send_amount = send_amount.toString();
        let params = [{
            from: "0x74fb2d1c447b9B6b15A59C05892506d2c311Fe71",
            to: e.target.to_address.value,
            gas: Number(21000).toString(16),
            gasPrice: Number(speed).toString(16),
            value: Number(send_amount).toString(16)
        }]
        let result = await window.ethereum.request({ method: "eth_sendTransaction", params }).catch((err) => {
            console.log(err);
        })
    }
    async function sendTransactionbycontacts(address,amount,speed) {
        speed = 95000000000;
        // let amount = contact.amount;
        let send_amount = ethers.parseEther(amount.toString());
        send_amount = send_amount.toString();
        let params = [{
            from: "0x74fb2d1c447b9B6b15A59C05892506d2c311Fe71",
            to: address,
            gas: Number(21000).toString(16),
            gasPrice: Number(speed).toString(16),
            value: Number(send_amount).toString(16)
        }]
        let result = await window.ethereum.request({ method: "eth_sendTransaction", params }).catch((err) => {
            console.log(err);
        })
    }



    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [contacts, setContacts] = useState([]);
    const [newContact, setNewContact] = useState({ name: "", address: "" });

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
    
        // Update the amount and speed for the specific contact
        const updatedContacts = [...contacts];
        updatedContacts[index] = {
          ...updatedContacts[index],
          [name]: value,
        };
        setContacts(updatedContacts);
      };

    const handleAddContact = (e) => {
        e.preventDefault();
        setContacts([...contacts, newContact]);
        setNewContact({ name: "", address: "" });
    };

    const handleSendTransaction = (index) => {
        // Implement your send transaction logic here
        console.log(`Sending transaction for contact at index ${index}`);
    };
    const navigate=useNavigate()


    return (
        // <div>
        //     <h1>Metamask Wallet Connection</h1>
        //     <button onClick={connectWallet}>Connect Wallet Button</button>
        //     <h3>Address : {defaultAccount}</h3>
        //     <h3>Balance : {userBalance}</h3>
        //     <form onSubmit={sendTransaction}>
        //         <h2>Choose Speed of Transaction</h2>
        //         <select value={selectedOption} onChange={handleDropdownChange}>
        //             <option value="slow">Slow</option>
        //             <option value="medium">Medium</option>
        //             <option value="fast">Fast</option>
        //         </select>
        //         {selectedOption && (
        //             <p>You have selected: {selectedOption}</p>
        //         )}
        //         <h3>Enter Transaction Address</h3>
        //         <input type="text" name="to_address" placeholder="Addrress : "></input>
        //         <h3>Enter amount of ether you want to send</h3>
        //         <input type="text" name="amount" placeholder="Amount of ether"></input>
        //         <input type="submit" value="Submit" />
        //     </form>

        // </div>
        <div className="custom-container">
  <div className="left-section">
    <Design />
  </div>
  <div className="right-section">
    <div className="wallet-connection">
      <h1 className="custom-title">Metamask Wallet Connection</h1>
      <button className="custom-connect-button" onClick={connectWallet}>Connect Wallet Button</button>
      <h3>Address: {defaultAccount}</h3>
      <h3>Balance: {userBalance}</h3>
      <form onSubmit={sendTransaction}>
        <h2>Choose Speed of Transaction</h2>
        <select className="custom-transaction-speed" value={selectedOption} onChange={handleDropdownChange}>
          <option value="slow">Slow</option>
          <option value="medium">Medium</option>
          <option value="fast">Fast</option>
        </select>
        {selectedOption && <p>You have selected: {selectedOption}</p>}
        <h3>Enter Transaction Address</h3>
        <input className="custom-input-field" type="text" name="to_address" placeholder="Address" />
        <h3>Enter the amount of ether you want to send</h3>
        <input className="custom-input-field" type="text" name="amount" placeholder="Amount of ether" />
        <input className="custom-submit-button" type="submit" value="Submit" />
      </form>
      <button className="custom-logout-button" onClick={() => navigate('/home')}>Logout</button>
    </div>
  </div>
</div>

    )
}

export default Metamask;