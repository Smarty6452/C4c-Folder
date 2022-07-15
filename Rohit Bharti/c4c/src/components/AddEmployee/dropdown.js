import React from 'react'
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space} from 'antd';

const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: '1st menu entry',
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: '2nd menu entry',
          key: '2',
          icon: <UserOutlined />,
        },
        {
          label: '3rd menu entry',
          key: '3',
          icon: <UserOutlined />,
        },
      ]}
    />
  );

const dropdown = () => {
  return (
  
         <Space wrap>
        <Dropdown overlay={menu}>
      <Button>
        <Space>
          <span >10</span>
          <DownOutlined  />
        </Space>
      </Button>
    </Dropdown>
    </Space>
  )
}

export default dropdown