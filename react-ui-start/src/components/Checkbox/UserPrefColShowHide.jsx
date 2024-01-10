// UserPrefColShowHide.jsx
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import SettingsIcon from "@mui/icons-material/Settings";
import "./UserPrefColShowHide.css";

// Define fixed optional columns
const fixedOptions = [
  { id: "LOB1", label: "LOB1", defaultChecked: false, category: "OPTIONAL" },
  { id: "LOB2", label: "LOB2", defaultChecked: false, category: "OPTIONAL" },
  // Add more fixed options as needed
];

const UserPrefColShowHide = () => {
  // Dynamically add columns to the DEFAULT section
  const dynamicOptions = [
    { id: "ColEmpiD", label: "ColEmpiD", defaultChecked: true, category: "DEFAULT" },
    { id: "ColEmpSal", label: "ColEmpSal", defaultChecked: true, category: "DEFAULT" },
    // Add more dynamic options as needed
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCheckboxChange = (option) => () => {
    setSelectedOptions((prevSelected) => (
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    ));
  };

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 p-4">
        <Button onClick={handleButtonClick} startIcon={<SettingsIcon />} />
      </div>
      {isDropdownOpen && (
        <div className="dropdown-container">
          <div className="mb-2">
            <h5 className="divider-solid">Show/Hide Column</h5>
          </div>
          {["DEFAULT", "OPTIONAL"].map((category) => (
            <div key={category}>
              <strong>{category}</strong>
              {(category === "DEFAULT" ? dynamicOptions : fixedOptions)
                .map((option) => (
                  <div key={option.id} className="checkbox-container mb-2">
                    <Checkbox
                      disabled={option.defaultChecked}
                      checked={selectedOptions.includes(option.id) || option.defaultChecked}
                      onChange={handleCheckboxChange(option.id)}
                    />
                    <label>{option.label}</label>
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPrefColShowHide;
