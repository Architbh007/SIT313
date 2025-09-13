import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import { useNavigate } from "react-router-dom";
import { Form, Button, Segment, Header } from "semantic-ui-react";
import ReactMarkdown from "react-markdown"; 
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";

export default function PostQuestion() {
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [code, setCode] = useState("// write your code here...");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/display", { state: { title, markdown, code } });
  };

  const handleReset = () => {
    setCode(""); 
  };

  return (
    <div>
      <h1>Post a Question</h1>
      <Form>
        <Form.Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your question title"
        />
        <Form.TextArea
          label="Description"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Write your question details here..."
        />

        <h3>Code Snippet</h3>
        <CodeMirror
          value={code}
          options={{
            mode: "javascript",
            theme: "material",
            lineNumbers: true,
          }}
          onBeforeChange={(editor, data, value) => {
            setCode(value.replace(/\n+$/, ""));
            if (value === "") {
              editor.setSize(null, "auto");
            } else {
              editor.setSize(null, "200px");
            }
          }}
        />

        <div style={{ marginTop: "15px" }}>
          <Button primary onClick={handleSubmit}>
            Submit Question
          </Button>
          <Button color="red" onClick={handleReset} style={{ marginLeft: "10px" }}>
            Reset Code
          </Button>
        </div>
      </Form>

      {/* 🔹 Live Preview Section */}
      <Segment style={{ marginTop: "30px" }}>
        <Header as="h2">Live Preview</Header>

        {/* Title Markdown without extra <Header> wrapper */}
        <ReactMarkdown>{title || "Untitled Question"}</ReactMarkdown>

        {/* Description Markdown */}
        <ReactMarkdown>{markdown || "Your description will appear here..."}</ReactMarkdown>

        {/* Code Snippet */}
        <Header as="h4">Code Snippet</Header>
        <pre style={{ background: "#282c34", color: "white", padding: "10px" }}>
          <code>{code || "// Your code will appear here"}</code>
        </pre>
      </Segment>
    </div>
  );
}
