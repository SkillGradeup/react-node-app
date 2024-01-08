import React from "react";
import { Dropdown, Button, Menu } from "antd";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

const MetricMonth = () => {
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
      <h5>Month</h5>
      <Dropdown overlay={dropdownMenu}>
        <Button shape="default" icon={<ArrowDropDown />}>
          Select a month
        </Button>
      </Dropdown>
    </div>
  );
};

export default MetricMonth;
