
import React, { useState } from 'react';
import { Drawer, Button, Space } from 'antd';

const AppDrawer=()=>{
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();

  const showDefaultDrawer = () => {
    setSize('default');
    setVisible(true);
  };

  
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Space>
        <Button type="primary" onClick={showDefaultDrawer}>
          Open Default Size (378px)
        </Button>
        
      </Space>
      <Drawer
        title={`${size} Drawer`}
        placement="left"
        size={"default"}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};







  

export default AppDrawer