import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Segment } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Payment from "./pages/Payment";
import PremiumUnlocked from "./pages/PremiumUnlocked";
import PostQuestion from "./pages/PostQuestion";
import QuestionDisplay from "./pages/QuestionDisplay";
import Analytics from "./pages/Analytics";
import Themes from "./pages/Themes";
import Controls from "./pages/Controls";

function App() {
  return (
    <Router>
      <Navbar />
      <Container style={{ marginTop: "6em", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/premium" element={<PremiumUnlocked />} />
          <Route path="/post" element={<PostQuestion />} />
          <Route path="/display" element={<QuestionDisplay />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/controls" element={<Controls />} />
        </Routes>
      </Container>
      <Segment
        vertical
        textAlign="center"
        style={{ padding: "1em", backgroundColor: "#add8e6", color: "black" }}
      >
        2025 DEV@Deakin | SIT313 Task
      </Segment>
    </Router>
  );
}

export default App;
