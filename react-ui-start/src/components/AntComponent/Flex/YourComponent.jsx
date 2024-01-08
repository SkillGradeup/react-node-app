import React from "react";
import { Button, Menu, Dropdown, Input } from "antd";
import { SearchOutlined, ArrowDropDown } from "@mui/icons-material";

const YourComponent = () => {
  const handleMenuClick = (e) => {
    console.log("click", e);
  };

  const menuProps = {
    items: [
      { label: "Option 1", key: "1" },
      { label: "Option 2", key: "2" },
      { label: "Option 3", key: "3" },
    ],
    onClick: handleMenuClick,
  };

  const dropdownMenu = (
    <Menu onClick={menuProps.onClick}>
      {menuProps.items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <div>
        <h5>Metric</h5>
      </div>
      <div className="flex flex-col-reverse ...">
        <div className="basis-1/4">01</div>
        <div className="basis-1/4">02</div>
        <div className="basis-1/2">03</div>
      </div>
    </div>
  );
};

export default YourComponent;
