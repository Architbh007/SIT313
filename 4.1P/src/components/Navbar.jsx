import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

function Navbar() {
  return (
    <Menu secondary style={{ padding: '1rem' }}>
      <Menu.Item header>DEV@Deakin</Menu.Item>
      <Menu.Item>
        <Input icon="search" placeholder="Search..." />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="Post" />
        <Menu.Item name="Login" />
      </Menu.Menu>
    </Menu>
  );
}

export default Navbar;
