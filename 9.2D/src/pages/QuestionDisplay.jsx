import React from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown"; 
import { Segment, Header } from "semantic-ui-react";

export default function QuestionDisplay() {
  const location = useLocation();
  const { title, markdown, code } = location.state || {};

  return (
    <Segment>
      {/* Title Markdown */}
      <ReactMarkdown>{title || "Untitled Question"}</ReactMarkdown>

      <Header as="h3">Description</Header>
      <ReactMarkdown>{markdown || "No description provided."}</ReactMarkdown>

      <Header as="h3">Code Snippet</Header>
      <pre style={{ background: "#282c34", color: "white", padding: "10px" }}>
        <code>{code || "// No code provided"}</code>
      </pre>
    </Segment>
  );
}
