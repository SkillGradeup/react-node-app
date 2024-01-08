import React from "react";
import { Form, Input, Button, Typography, message } from "antd";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MetricMonth from "./MetricMonth";
import MetricFilter from "./MetricFilter";
import MetricStatus from "./MetricStatus";

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <CircleRoundedIcon />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <CircleRoundedIcon />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <CircleRoundedIcon />,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const FormD = () => {
  return (
    <div>
      <Typography.Text>Metrics</Typography.Text>
      <Form layout="inline" className="flex item">
        <div className="p-4">
          {/* Add some padding to see the container */}
          <Form.Item name="search">
            <Input
              placeholder="Search for MBO"
              suffix={
                <div className="flex items-center">
                  <Button shape="circle" icon={<SearchIcon />} />
                </div>
              }
            />
          </Form.Item>
        </div>
        <Form.Item name="month">
          <MetricMonth />
        </Form.Item>
        <Form.Item name="metric">
          <MetricFilter />
        </Form.Item>
        <Form.Item name="Status">
          <MetricStatus />
        </Form.Item>
        <Form.Item name="setting">
          <div className="border rounded-md">
            <SettingsOutlinedIcon className="text-black rounded-md" />
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormD;
