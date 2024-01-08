import React from "react";
import { Col, Row, Button, Input } from "antd";
import SearchIcon from "@mui/icons-material/SearchIcon";
import MetricMonth from "../Form/MetricMonth";
import MetricFilter from "../Form/MetricFilter";
import MetricStatus from "../Form/MetricStatus";
const FlexD = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4">
        <h5>Metrics</h5>
      <Row gutter={[16, 16]} align="bottom">
        <Col span={8}>
          <Input
            placeholder="Search for MBO"
            suffix={
              <div className="flex items-center">
                <Button shape="circle" icon={<SearchIcon />} />
              </div>
            }
          />
        </Col>
        <Col span={4}>
          <MetricMonth></MetricMonth>
        </Col>
        <Col span={4}>
          <MetricFilter ></MetricFilter>
        </Col>
        <Col>
          <MetricStatus />
        </Col>
      </Row>
    </div>
  );
};

export default FlexD;
