import React from "react";
import { Dropdown, Button, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

const items = [
  { key: "1", label: "All" },
  { key: "2", label: "Metric to edit" },
];

const MetricFilter = () => {
  const menu = (
    <Menu>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="flex">
      <h5>Select a month</h5>
      <Dropdown overlay={menu}>
        <Button className="h-[52px]">
          Select a month <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default MetricFilter;
