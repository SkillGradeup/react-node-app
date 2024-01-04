import React from 'react';
import { SearchOutlined, UserOutlined ,SettingOutlined} from '@ant-design/icons';
import { Form, Input, Typography, message } from 'antd';
import MetricMonth from './MetricMonth';
import MetricFilter from './MetricFilter';
import MetricStatus from './MetricStatus';

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const formItemLayout = {
  labelCol: {
    span: 24, // Full width for the label
  },
  wrapperCol: {
    span: 24, // Full width for the input/element
  },
};

const FormD = () => {
  return (
    <div>
      <Typography.Text>Metrics</Typography.Text>
      <Form layout="inline" class='flex flex-row ...'>
        <Form.Item name="search" >
          <Input suffix={<SearchOutlined className="site-form-item-icon" />} placeholder="Search for MBO" />
        </Form.Item>
        <Form.Item name="month" >
          <MetricMonth />
        </Form.Item>
        <Form.Item name="metric">
          <MetricFilter />
        </Form.Item>
        <Form.Item name="Status">
          <MetricStatus />
        </Form.Item> 
        <Form.Item name="setting">
        <SettingOutlined/>
        </Form.Item> 
       
      </Form>
    </div>
  );
};

export default FormD;
