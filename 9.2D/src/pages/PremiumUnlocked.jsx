import React from "react";
import { Link } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

export default function PremiumUnlocked() {
  return (
    <div>
      <Header as="h1">🎉 Welcome to Premium!</Header>
      <p>You now have access to exclusive features.</p>
      <Button as={Link} to="/analytics" color="blue">Analytics</Button>
      <Button as={Link} to="/themes" color="green">Themes</Button>
      <Button as={Link} to="/controls" color="orange">Content Controls</Button>
    </div>
  );
}
