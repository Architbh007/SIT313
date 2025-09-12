import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/sendmessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        alert("Welcome email sent!");
        setEmail("");
      } else {
        alert("Error subscribing.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error.");
    }
  };

  return (
    <footer className="footer">
      {/* Newsletter signup */}
      <div className="newsletter-bar">
        <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* Footer content */}
      <div className="footer-content">
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Stay connected</h4>
          <div className="social-icons">
            <span>🅾</span> 
            <span>▶️</span>
            <span>📸</span>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="footer-bottom">
        <span><strong>DEV@Deakin</strong></span>
        <span>Privacy Policy</span>
        <span>Terms</span>
        <span>Code of Conduct</span>
      </div>
    </footer>
  );
}
