import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const myEmail = "iftekharislam923@gmail.com";

    const subject = `Portfolio Contact Message from ${formData.name}`;

    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
`;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailLink, "_blank");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-box">
        <div className="contact-left">
          <h2>
            Bringing your <br />
            ideas to life. Let's <br />
            turn your vision <br />
            into reality
          </h2>

          <p>Have a project in mind or just want to chat? Let's connect!</p>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="contact@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;