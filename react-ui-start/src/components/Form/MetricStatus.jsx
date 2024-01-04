import React from 'react';
import { Dropdown, Button, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const items = [
  { key: '1', label: 'Completed' },
  { key: '2', label: 'In progress' }
];

const MetricStatus = () => {
  const menu = (
    <Menu>
      {items.map(item => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button>
        Status <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default MetricStatus;
