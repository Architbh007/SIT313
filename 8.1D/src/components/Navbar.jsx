import React from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const loc = useLocation();
  return (
    <Menu inverted color="violet" borderless>
      <Container>
        <Menu.Item header as={Link} to="/questions">
          <Icon name="graduation cap" style={{ marginRight: 8 }} />
          DEV@Deakin
        </Menu.Item>
        <Menu.Item as={Link} to="/questions" active={loc.pathname.startsWith('/questions')}>
          Find Question
        </Menu.Item>
        <Menu.Item as={Link} to="/post/new" active={loc.pathname.startsWith('/post')}>
          New Post
        </Menu.Item>
      </Container>
    </Menu>
  );
}
