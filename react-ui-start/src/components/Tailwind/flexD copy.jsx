import React from "react";
import {Button, Input } from "antd";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MetricMonth from "./MetricMonth";
import MetricSelect from "./MetricSelect";
import MetricStatus from "./MetricStatus";

const flexD = () => {
  return (
    <div className="max-auto">
    <div className="flex flex-row border flex-end">
      <div>
        <Input
          placeholder="Search for MBO"
          suffix={
            <div>
              <Button shape="circle" icon={<SearchOutlinedIcon />} />
            </div>
          }
        />
      </div>
      <div className="items-start px-8"><MetricMonth/></div>
      <div className="items-start px-8"><MetricSelect/></div>
      <div className="items-start px-8"><MetricStatus/></div>
      <div><SettingsOutlinedIcon/></div>
    </div>
    </div>
  );
};
export default flexD;
