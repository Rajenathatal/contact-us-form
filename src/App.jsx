import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.subject ||
      !form.message
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <div className="page">
      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1>Contact Us</h1>

          <label>Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />

          <label>Email *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />

          <label>Phone *</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
          />

          <label>Subject *</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={form.subject}
            onChange={handleChange}
          />

          <label>Message *</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit">Send Message</button>
        </form>
      ) : (
        <div className="success">
          <div className="check">✓</div>

          <h1>Message Submitted Successfully!</h1>

          <p>
            <strong>Name:</strong> {form.name}
          </p>

          <p>
            <strong>Email:</strong> {form.email}
          </p>

          <p>
            <strong>Phone:</strong> {form.phone}
          </p>

          <p>
            <strong>Subject:</strong> {form.subject}
          </p>

          <p>
            <strong>Message:</strong> {form.message}
          </p>

          <button onClick={() => setSubmitted(false)}>
            Send Another Message
          </button>
        </div>
      )}
    </div>
  );
}

export default App;