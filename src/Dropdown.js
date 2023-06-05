import React, { useState } from 'react';
import { speed } from './Metamask';
const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState("option1");

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <div>
            <h2>Select an Option:</h2>
            <select value={selectedOption} onChange={handleDropdownChange}>
                <option value="">-- Select --</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            {selectedOption && (
                <p>You have selected: {selectedOption}</p>
            )}
        </div>
    );
};

export default Dropdown;
