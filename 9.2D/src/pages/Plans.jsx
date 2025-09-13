import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";

export default function Plans() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Choose Your Plan</h1>
      <Card.Group itemsPerRow={2}>
        <Card>
          <Card.Content>
            <Card.Header>Free Plan</Card.Header>
            <Card.Description>
              Basic posting features available to everyone.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button basic color="green" onClick={() => navigate("/")}>
              Select Free
            </Button>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>Premium Plan</Card.Header>
            <Card.Description>
              Access analytics, themes, content controls, and more.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button color="blue" onClick={() => navigate("/payment")}>
              Select Premium
            </Button>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
