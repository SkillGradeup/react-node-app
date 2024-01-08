import React from "react";
import { Dropdown, Button, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

const items = [
  { key: "1", label: "Completed" },
  { key: "2", label: "In progress" },
];

const MetricStatus = () => {
  const menu = (
    <Menu>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="flex">
      <h5>Status</h5>
      <Dropdown overlay={menu}>
        <Button class="h-[52px]">
          Status <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default MetricStatus;
