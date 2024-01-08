import React from "react";
import { Input } from "antd";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MetricMonth from "./MetricMonth";

const flexD = () => {
  const onSearch = (e) => console.log('Search value:', e);;

  return (
    <div>
      <div>Metric</div>
      <div className="flex">
        {/*Search item1 */}
        <div>
          <Input
            placeholder="Search for MBO"
            onPressEnter={(e) => onSearch(e.target.value)}
            enterButton
            suffix={
              <div
                className="border border-cyan-950 rounded-full cursor-pointer p-2"
                onClick={() => onSearch()}
              >
                <SearchOutlinedIcon />
              </div>
            }
          />
        </div>
        {/*Month item2 */}
        <div>
           <MetricMonth/> 
        </div>
        {/*Metric item3*/}
        {/*Metric item4*/}
        {/*Metric item5 */}
      </div>
    </div>
  );
};
export default flexD;
